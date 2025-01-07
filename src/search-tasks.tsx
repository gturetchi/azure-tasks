import { getPreferenceValues } from "@raycast/api";

export default function Command() {
  const preferences = getPreferenceValues();
  const organizationName = preferences.organizationName;
  const personalAccessToken = preferences.personalAccessToken;

  return (
    <div>
      <p>Organization Name: {organizationName}</p>
      <p>Personal Access Token: {personalAccessToken}</p>
    </div>
  );
}
