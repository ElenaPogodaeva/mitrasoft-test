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
  _title: string;
  _page: string;
  _limit: string;
};
