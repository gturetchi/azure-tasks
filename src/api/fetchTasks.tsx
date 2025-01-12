import { useFetch } from "@raycast/utils";
import { baseApiUrl, preparedPersonalAccessToken } from "../preferences";
import { WorkItemResponse } from "../models/task";

export const fetchWorkItems = (projectName: string) => {
  const { data, isLoading, error } = useFetch<WorkItemResponse>(
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

  return { data, isLoading, error };
};
