import { List, Icon, Action, ActionPanel, useNavigation } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { ProjectResponse, Project } from "./models/project";
import { TeamsResponse, Team } from "./models/team";
import { baseApiUrl, preparedPersonalAccessToken } from "./preferences";

function TeamsList({ projectId }: { projectId: string }) {
  const { data: teamData, isLoading: isTeamLoading } = useFetch<TeamsResponse>(
    `${baseApiUrl()}/_apis/projects/${projectId}/teams`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${preparedPersonalAccessToken()}`,
      },
    },
  );

  return (
    <List isLoading={isTeamLoading}>
      {teamData?.value.map((team: Team) => (
        <List.Item
          key={team.id}
          title={team.name}
          subtitle={team.description || "No description available"}
          accessories={[
            {
              text: team.url || "No Default Team",
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
              <Action title="Push" onAction={() => push(<TeamsList projectId={project.id} />)} />
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
