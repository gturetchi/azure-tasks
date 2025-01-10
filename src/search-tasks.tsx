import { List, Icon } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { ProjectResponse, Project } from "./models/project";
import { TeamsResponse } from "./models/team";
import { baseApiUrl, preparedPersonalAccessToken } from "./preferences";

export default function Command() {
  const { data: projectData, isLoading: isProjectLoading } = useFetch<ProjectResponse>(
    `${baseApiUrl()}/_apis/projects`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${preparedPersonalAccessToken()}`,
      },
    },
  );

  const { data: teamData, isLoading: isTeamLoading } = useFetch<TeamsResponse>(
    `${baseApiUrl()}/_apis/projects/d831c035-9a76-48f9-9dcb-e37fff489248/teams`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${preparedPersonalAccessToken()}`,
      },
    },
  );

  // Log team data for debugging
  console.log("Team Data:", teamData);

  return (
    <List isLoading={isProjectLoading}>
      {projectData?.value.map((project: Project) => (
        <List.Item
          key={project.id}
          title={project.name}
          subtitle={project.description || "No description available"}
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
