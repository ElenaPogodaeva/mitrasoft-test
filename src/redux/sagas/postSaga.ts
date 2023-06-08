import { IPost, SearchOptions, SearchPostsParams } from '../../types/types';
import { put, call } from 'redux-saga/effects';
import {
  fetchPostsError,
  fetchPostsPending,
  fetchPostsSuccess,
  fetchUserPostsError,
  fetchUserPostsPending,
  fetchUserPostsSuccess,
} from '../reducers/postSlice';
import { getPosts, getUserPosts } from '../../utils/api';
import { PayloadAction } from '@reduxjs/toolkit';

export function* fetchPostsSaga({ payload }: PayloadAction<SearchOptions>) {
  const { searchValue, currentPage, resultsPerPage, sortOrder } = payload;

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
    yield put(fetchPostsPending());

    const posts: IPost[] = yield call(getPosts, params);

    yield put(fetchPostsSuccess(posts));
  } catch (err) {
    yield put(fetchPostsError());
  }
}

export function* fetchUserPostsSaga({ payload }: PayloadAction<number>) {
  try {
    yield put(fetchUserPostsPending());

    const posts: IPost[] = yield call(getUserPosts, payload);

    yield put(fetchUserPostsSuccess(posts));
  } catch (err) {
    yield put(fetchUserPostsError());
  }
}
