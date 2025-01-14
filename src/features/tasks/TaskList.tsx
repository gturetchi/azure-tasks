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
          icon={GetIconType(workItem.fields["System.State"])}
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
              text: workItem.fields["System.AssignedTo"] || "Unassigned",
            },
          ]}
        />
      ))}
    </List>
  );
}

function GetIconType(taskStatus: string) {
  switch (taskStatus) {
    case "New":
      return Icon.Circle;
    case "Active":
      return Icon.CircleProgress50;
    case "Resolved":
      return Icon.CircleProgress100;
    case "Closed":
      return Icon.CircleProgress100;
    case "Done":
      return Icon.CircleProgress100;
    default:
      return Icon.Circle;
  }
}
