import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getPosts, getUser } from '../utils/api';

export const fetchPosts = createAsyncThunk('post/fetchPosts', async (_, { rejectWithValue }) => {
  try {
    const posts = await getPosts();
    return { posts };
  } catch (err) {
    return rejectWithValue((err as Error).message);
  }
});

export const fetchComments = createAsyncThunk(
  'post/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      const comments = await getComments();
      return { comments };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (id: string, { rejectWithValue }) => {
    try {
      const user = await getUser(+id);
      return { user };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);
