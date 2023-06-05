import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reducers/postSlice';
import commentReducer from './reducers/commentSlice';
import userReducer from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
