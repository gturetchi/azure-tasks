import { List, Icon } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { WorkItem, WorkItemResponse } from "./models/taskList";
import { baseApiUrl, preparedPersonalAccessToken } from "./preferences";

export default function Command() {
  const { data, error, isLoading } = useFetch<WorkItemResponse>(`${baseApiUrl()}/SRE/_apis/wit/wiql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${preparedPersonalAccessToken()}`,
    },
    body: JSON.stringify({
      query: `
            SELECT
              [System.Id],
              [System.Title],
              [System.AssignedTo],
              [System.State]
            FROM workitems
            WHERE [System.AssignedTo] = @Me
          `,
    }),
  });

  console.log("Base URL:", baseApiUrl());
  console.log("Auth Token:", preparedPersonalAccessToken());
  console.log(error);

  return (
    <List isLoading={isLoading}>
      {data?.workItems.map((workItem: WorkItem) => (
        <List.Item
          key={workItem.id || "No ID"}
          title={workItem.url || "No URL"}
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
