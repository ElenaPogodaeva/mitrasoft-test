import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from '../thunks';
import { IPost } from '../../types/types';

export type PostState = {
  isLoading: boolean;
  error: string;
  posts: IPost[];
};

const initialState: PostState = {
  isLoading: true,
  error: '',
  posts: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
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

export default postSlice.reducer;
