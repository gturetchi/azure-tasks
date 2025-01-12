import { List, Icon, Action, ActionPanel, useNavigation } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { ProjectResponse, Project } from "./models/project";
import { WorkItemResponse, WorkItem } from "./models/task";
import { baseApiUrl, preparedPersonalAccessToken } from "./preferences";

function TaskList({ projectName }: { projectName: string }) {
  const { data, isLoading } = useFetch<WorkItemResponse>(
    `${baseApiUrl()}/${projectName}/_apis/wit/wiql?api-version=7.2-preview.2`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${preparedPersonalAccessToken()}`,
      },
      body: JSON.stringify({
        query:
          "Select [System.Id], [System.Title], [System.State] From WorkItems Where [System.TeamProject] = @project AND [System.AssignedTo] = @Me",
      }),
    },
  );

  console.log(data?.workItems);

  return (
    <List isLoading={isLoading}>
      {data?.workItems.map((workItem: WorkItem) => (
        <List.Item
          key={workItem.id}
          title={workItem.url}
          subtitle={workItem.url || "No description available"}
          accessories={[
            {
              text: workItem.url || "No Default Team",
              icon: Icon.Code,
            },
          ]}
        />
      ))}
    </List>
  );
}

export default function Command() {
  const { push } = useNavigation();
  const { data: projectData, isLoading: isProjectLoading } = useFetch<ProjectResponse>(
    `${baseApiUrl()}/_apis/projects`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${preparedPersonalAccessToken()}`,
      },
    },
  );

  return (
    <List isLoading={isProjectLoading}>
      {projectData?.value.map((project: Project) => (
        <List.Item
          key={project.id}
          title={project.name}
          subtitle={project.description || "No description available"}
          actions={
            <ActionPanel>
              <Action title="Push" onAction={() => push(<TaskList projectName={project.name} />)} />
            </ActionPanel>
          }
          accessories={[
            {
              text: project.state || "No Default Team",
              icon: Icon.Code,
            },
          ]}
        />
      ))}
    </List>
  );
}
