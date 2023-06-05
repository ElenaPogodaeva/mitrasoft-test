import { createSlice } from '@reduxjs/toolkit';
import { fetchComments } from '../thunks';
import { IComment } from '../../types/types';

export type CommentState = {
  isLoading: boolean;
  error: string;
  comments: IComment[];
};

const initialState: CommentState = {
  isLoading: true,
  error: '',
  comments: [],
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.comments = action.payload.comments;
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.comments = [];
    });
  },
});

export default commentSlice.reducer;
