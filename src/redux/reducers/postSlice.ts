import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { IPost, SearchOptions, SortType } from '../../types/types';

export type PostState = {
  isLoading: boolean;
  error: string;
  posts: IPost[];
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
  totalPages: number;
  sortOrder: SortType;
};

const initialState: PostState = {
  isLoading: true,
  error: '',
  posts: [],
  searchValue: '',
  resultsPerPage: 10,
  currentPage: 1,
  totalPages: 10,
  sortOrder: SortType.ASC,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    fetchPostsPending: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    },
    fetchPostsError: (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.posts = [];
    },
    fetchUserPostsPending: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchUserPostsSuccess: (state, action: PayloadAction<IPost[]>) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload;
    },
    fetchUserPostsError: (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.posts = [];
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload as SortType;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  fetchPostsPending,
  fetchPostsSuccess,
  fetchPostsError,
  fetchUserPostsPending,
  fetchUserPostsSuccess,
  fetchUserPostsError,
  setCurrentPage,
  setSearchValue,
  setSortOrder,
} = postSlice.actions;

export const FETCH_POSTS = 'posts/fetchPosts';
export const fetchPosts = createAction<SearchOptions>(FETCH_POSTS);

export const FETCH_USER_POSTS = 'posts/fetchUserPosts';
export const fetchUserPosts = createAction<number>(FETCH_USER_POSTS);

export default postSlice.reducer;
