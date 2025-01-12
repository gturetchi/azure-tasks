import { List, Icon, Action, ActionPanel, useNavigation } from "@raycast/api";
import { Project } from "../../models/project";
import { fetchProjects } from "../../api/fetchProjects";
import TaskList from "../tasks/TaskList";

export default function ProjectList() {
  const { push } = useNavigation();
  const { data, isLoading: isProjectLoading } = fetchProjects();

  return (
    <List isLoading={isProjectLoading}>
      {data?.value.map((project: Project) => (
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
