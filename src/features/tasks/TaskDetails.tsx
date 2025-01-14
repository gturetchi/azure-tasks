import { Icon, Detail } from "@raycast/api";
import { WorkItemDetails } from "../../models/task";

export default function TaskDetails({ workItemDetails }: { workItemDetails: WorkItemDetails }) {
  return (
    <Detail
      markdown={`# Hello World! \n *** `}
      navigationTitle={workItemDetails.id.toString()}
      metadata={
        <Detail.Metadata>
          <Detail.Metadata.Label title="Height" text={`1' 04"`} />
          <Detail.Metadata.Label title="Weight" text="13.2 lbs" />
          <Detail.Metadata.TagList title="Type">
            <Detail.Metadata.TagList.Item text="Electric" color={"#eed535"} />
          </Detail.Metadata.TagList>
          <Detail.Metadata.Separator />
          <Detail.Metadata.Link title="Evolution" target="https://www.pokemon.com/us/pokedex/pikachu" text="Raichu" />
        </Detail.Metadata>
      }
    />
  );
}
