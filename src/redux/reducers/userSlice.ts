import { createSlice } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks';
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = '';
      state.user = action.payload.user;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Error occured';
      state.user = null;
    });
  },
});

export default userSlice.reducer;
