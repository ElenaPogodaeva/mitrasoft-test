import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchPosts, fetchUserPosts } from '../thunks';
import { IPost, SortType } from '../../types/types';

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
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload.posts;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.posts = [];
    });
    builder.addCase(fetchUserPosts.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload.posts;
    });
    builder.addCase(fetchUserPosts.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.posts = [];
    });
  },
});

export const { setCurrentPage, setSearchValue, setSortOrder } = postSlice.actions;

export default postSlice.reducer;
