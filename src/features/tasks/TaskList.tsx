import { List, Icon, Action, ActionPanel, useNavigation } from "@raycast/api";
import { fetchWorkItems } from "../../api/fetchTasks";
import { WorkItemDetails } from "../../models/task";
import TaskDetails from "./TaskDetails";

export default function TaskList({ projectName }: { projectName: string }) {
  const { data, isLoading } = fetchWorkItems(projectName);
  const { push } = useNavigation();

  return (
    <List isLoading={isLoading}>
      {data?.value.map((workItem: WorkItemDetails) => (
        <List.Item
          key={workItem.id}
          icon={Icon.Bug}
          title={workItem.fields["System.Title"]}
          subtitle={workItem.fields["System.State"] || "No description available"}
          actions={
            <ActionPanel>
              <Action
                title="Show Work Item Details"
                onAction={() => push(<TaskDetails workItemDetails={workItem} />)}
              />
            </ActionPanel>
          }
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
