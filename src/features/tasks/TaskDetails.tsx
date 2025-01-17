import { Icon, Detail } from "@raycast/api";
import { WorkItemDetails } from "../../models/task";

export default function TaskDetails({ workItemDetails }: { workItemDetails: WorkItemDetails }) {
  const TurndownService = require("turndown") as any;
  const turndownService = new TurndownService();
  const markdown = turndownService.turndown(workItemDetails.fields["System.Description"]);
  const date = new Date(workItemDetails.fields["System.CreatedDate"]);

  return (
    <Detail
      markdown={markdown}
      navigationTitle={workItemDetails.id.toString()}
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="State" text={workItemDetails.fields["System.State"]} />
          <Detail.Metadata.Label title="Assigned to" text={workItemDetails.fields["System.AssignedTo"]} />
          <Detail.Metadata.Label title="Date created" text={date.toISOString().split("T")[0]} />
        </Detail.Metadata>
      }
    />
  );
}
