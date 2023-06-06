import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getPosts, getUser, getUserPosts } from '../utils/api';
import { SearchPostsParams } from '../types/types';

type SearchOptions = {
  resultsPerPage: number;
  currentPage: number;
};

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { currentPage, resultsPerPage } = searchOptions;

    const params: SearchPostsParams = {
      _title: '',
      _page: currentPage.toString(),
      _limit: resultsPerPage.toString(),
    };

    try {
      const posts = await getPosts(params);
      return { posts };
    } catch (err) {
      return rejectWithValue((err as Error).message);
    }
  }
);

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
