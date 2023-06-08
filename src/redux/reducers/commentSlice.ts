import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
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
  reducers: {
    fetchCommentsPending: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchCommentsSuccess: (state, action: PayloadAction<IComment[]>) => {
      state.isLoading = false;
      state.error = '';
      state.comments = action.payload;
    },
    fetchCommentsError: (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.comments = [];
    },
  },
});

export const { fetchCommentsPending, fetchCommentsSuccess, fetchCommentsError } =
  commentSlice.actions;

export const FETCH_COMMENTS = 'comments/fetchComments';
export const fetchComments = createAction(FETCH_COMMENTS);

export default commentSlice.reducer;
