import { configureStore } from '@reduxjs/toolkit';
import postReducer, { FETCH_POSTS, FETCH_USER_POSTS } from './reducers/postSlice';
import commentReducer, { FETCH_COMMENTS } from './reducers/commentSlice';
import userReducer, { FETCH_USER } from './reducers/userSlice';
import createSagaMiddleware from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { fetchPostsSaga, fetchUserPostsSaga } from './sagas/postSaga';
import { fetchCommentsSaga } from './sagas/commentSaga';
import { fetchUserSaga } from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield takeEvery(FETCH_POSTS, fetchPostsSaga);
  yield takeEvery(FETCH_COMMENTS, fetchCommentsSaga);
  yield takeEvery(FETCH_USER, fetchUserSaga);
  yield takeEvery(FETCH_USER_POSTS, fetchUserPostsSaga);
}

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
