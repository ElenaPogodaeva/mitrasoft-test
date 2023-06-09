export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export type SearchPostsParams = {
  title?: string;
  _page: string;
  _limit: string;
  _sort: string;
  _order: SortType;
};

export enum SortType {
  ASC = 'asc',
  DESC = 'desc',
}

export type SearchOptions = {
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
  sortOrder: SortType;
};
