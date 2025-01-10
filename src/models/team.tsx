export type Team = {
  id: string;
  name: string;
  url: string;
  description: string;
  identityUrl: string;
};

export type TeamsResponse = {
  value: Team[];
  count: number;
};
