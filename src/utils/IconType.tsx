import { Icon } from "@raycast/api";

export default function GetTaskIconType(taskStatus: string) {
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
