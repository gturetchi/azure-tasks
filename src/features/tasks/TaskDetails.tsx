import { Icon, Detail } from "@raycast/api";
import { WorkItemDetails } from "../../models/task";

export default function TaskDetails({ workItemDetails }: { workItemDetails: WorkItemDetails }) {
  return <Detail markdown={`# Hello World! \n *** `} navigationTitle={workItemDetails.id.toString()} />;
}
