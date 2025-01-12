import { List, Icon } from "@raycast/api";
import { fetchWorkItems } from "../../api/fetchTasks";
import { WorkItem } from "../../models/task";

export default function TaskList({ projectName }: { projectName: string }) {
  const { data, isLoading } = fetchWorkItems(projectName);

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
