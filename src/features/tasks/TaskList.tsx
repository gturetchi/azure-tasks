import { List, Icon, Detail } from "@raycast/api";
import { fetchWorkItems } from "../../api/fetchTasks";
import { WorkItemDetails } from "../../models/task";

export default function TaskList({ projectName }: { projectName: string }) {
  const { data, isLoading } = fetchWorkItems(projectName);

  return (
    <List isLoading={isLoading}>
      {data?.value.map((workItem: WorkItemDetails) => (
        <List.Item
          key={workItem.id}
          icon={Icon.List}
          title={workItem.fields["System.Title"]}
          subtitle={workItem.fields["System.State"] || "No description available"}
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
