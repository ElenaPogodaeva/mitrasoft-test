import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getPosts, getUser, getUserPosts } from '../utils/api';
import { SearchPostsParams, SortType } from '../types/types';

type SearchOptions = {
  searchValue: string;
  resultsPerPage: number;
  currentPage: number;
  sortOrder: SortType;
};

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (searchOptions: SearchOptions, { rejectWithValue }) => {
    const { searchValue, currentPage, resultsPerPage, sortOrder } = searchOptions;

    const params: SearchPostsParams = {
      _page: currentPage.toString(),
      _limit: resultsPerPage.toString(),
      _sort: 'title',
      _order: sortOrder,
    };

    if (searchValue) {
      params.title = searchValue;
    }

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

export const fetchUserPosts = createAsyncThunk(
  'post/fetchUserPosts',
  async (id: string, { rejectWithValue }) => {
    try {
      const posts = await getUserPosts(+id);
      return { posts };
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
