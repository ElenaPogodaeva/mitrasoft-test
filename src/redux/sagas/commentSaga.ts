import { IComment } from '../../types/types';
import { put, call } from 'redux-saga/effects';
import { getComments } from '../../utils/api';
import {
  fetchCommentsError,
  fetchCommentsPending,
  fetchCommentsSuccess,
} from '../reducers/commentSlice';

export function* fetchCommentsSaga() {
  try {
    yield put(fetchCommentsPending());

    const comments: IComment[] = yield call(getComments);

    yield put(fetchCommentsSuccess(comments));
  } catch (err) {
    yield put(fetchCommentsError());
  }
}
