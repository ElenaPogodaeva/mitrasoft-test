import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../thunks';
import { IPost } from '../../types/types';

export type PostState = {
  isLoading: boolean;
  error: string;
  posts: IPost[];
  resultsPerPage: number;
  currentPage: number;
  totalPages: number;
};

const initialState: PostState = {
  isLoading: true,
  error: '',
  posts: [],
  resultsPerPage: 10,
  currentPage: 1,
  totalPages: 10,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    // setSearchValue: (state, action: PayloadAction<string>) => {
    //   state.searchValue = action.payload;
    // },
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
  },
});

export const { setCurrentPage } = postSlice.actions;

export default postSlice.reducer;
