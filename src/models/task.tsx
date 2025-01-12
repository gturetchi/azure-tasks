export type WorkItemResponse = {
  queryType: string;
  asOf: string;
  columns: Column[];
  sortColumns: SortColumn[];
  workItems: WorkItem[];
};

export type Column = {
  referenceName: string;
  name: string;
  url: string;
};

export type SortColumn = {
  field: Column;
  descending: boolean;
};

export type WorkItem = {
  id: number;
  url: string;
};

export interface WorkItemDetailsResponse {
  count: number;
  value: WorkItemDetails[];
}

export type WorkItemDetails = {
  id: number;
  rev: number;
  fields: WorkItemFields;
  relations?: WorkItemRelation[];
  _links: WorkItemLinks;
  url: string;
};

export type WorkItemFields = {
  "System.Id": number;
  "System.AreaId": number;
  "System.AreaPath": string;
  "System.NodeName": string;
  "System.TeamProject": string;
  "System.AreaLevel1": string;
  "System.AreaLevel2"?: string;
  "System.Rev": number;
  "System.AuthorizedDate": string;
  "System.RevisedDate": string;
  "System.IterationId": number;
  "System.IterationPath": string;
  "System.IterationLevel1": string;
  "System.WorkItemType": string;
  "System.State": string;
  "System.Reason": string;
  "System.CreatedDate": string;
  "System.CreatedBy": UserDetails;
  "System.ChangedDate": string;
  "System.ChangedBy": UserDetails;
  "System.AuthorizedAs": UserDetails;
  "System.AssignedTo"?: string; // Nullable or optional
  "System.PersonId": number;
  "System.Watermark": number;
  "System.Title": string;
  "System.Description"?: string; // Nullable or optional
  "Microsoft.VSTS.Scheduling.Effort"?: number; // Nullable or optional
  "Microsoft.VSTS.Scheduling.RemainingWork"?: number; // Nullable or optional
  "System.Tags"?: string; // Nullable or optional
  [key: string]: unknown; // Catch-all for untyped fields
};

export type UserDetails = {
  displayName: string;
  url: string;
  _links: UserAvatarLink;
  id: string;
  uniqueName: string;
  imageUrl: string;
  descriptor: string;
};

export type UserAvatarLink = {
  avatar: {
    href: string;
  };
};

export type WorkItemRelation = {
  rel: string;
  url: string;
  attributes?: {
    isLocked: boolean;
    comment?: string;
    authorizedDate?: string;
    id?: number;
    resourceCreatedDate?: string;
    resourceModifiedDate?: string;
    revisedDate?: string;
    name?: string;
  };
};

export type WorkItemLinks = {
  self: Link;
  workItemUpdates: Link;
  workItemRevisions: Link;
  workItemHistory: Link;
  html: Link;
  workItemType: Link;
  fields: Link;
};

export type Link = {
  href: string;
};
