import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/types';

export type UserState = {
  isLoading: boolean;
  error: string;
  user: IUser | null;
};

const initialState: UserState = {
  isLoading: true,
  error: '',
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserPending: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    fetchUserSuccess: (state, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload;
    },
    fetchUserError: (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.user = null;
    },
  },
});

export const { fetchUserPending, fetchUserSuccess, fetchUserError } = userSlice.actions;

export const FETCH_USER = 'user/fetchUser';
export const fetchUser = createAction<number>(FETCH_USER);

export default userSlice.reducer;
