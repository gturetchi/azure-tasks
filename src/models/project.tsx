export type ProjectCollection = {
  id: string;
  name: string;
  url: string;
  collectionUrl: string;
};

export type DefaultTeam = {
  id: string;
  name: string;
  url: string;
};

export type Project = {
  id: string;
  name: string;
  url: string;
  description: string;
  collection: ProjectCollection;
  defaultTeam: DefaultTeam;
};

export type ApiProjectResponse = {
  value: Project[];
  count: number;
};
