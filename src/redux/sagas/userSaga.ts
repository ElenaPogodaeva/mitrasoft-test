import { IUser } from '../../types/types';
import { put, call } from 'redux-saga/effects';
import { getUser } from '../../utils/api';
import { PayloadAction } from '@reduxjs/toolkit';
import { fetchUserError, fetchUserPending, fetchUserSuccess } from '../reducers/userSlice';

export function* fetchUserSaga({ payload }: PayloadAction<number>) {
  try {
    yield put(fetchUserPending());

    const user: IUser = yield call(getUser, payload);

    yield put(fetchUserSuccess(user));
  } catch (err) {
    yield put(fetchUserError());
  }
}
