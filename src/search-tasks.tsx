import { List, Icon } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { ProjectResponse, Project } from "./models/project";
import { baseApiUrl, preparedPersonalAccessToken } from "./preferences";

export default function Command() {
  const { data, isLoading } = useFetch<ProjectResponse>(`${baseApiUrl()}/_apis/projects`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${preparedPersonalAccessToken()}`,
    },
  });

  console.log(data);
  return (
    <List isLoading={isLoading}>
      {data?.value.map((project: Project) => (
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
