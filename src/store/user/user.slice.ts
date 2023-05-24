import { createSlice } from '@reduxjs/toolkit';

import { getLocalStorageItem } from '@/utils/getLocalStorageItem';

import { checkAuth, login, logout, register } from './user.actions';
import { UserInitialState } from './user.interface';

const initialState: UserInitialState = {
  user: getLocalStorageItem('user'),
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(register.rejected, state => {
        state.isLoading = false;
        state.user = null;
      });

    builder
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, state => {
        state.isLoading = false;
        state.user = null;
      });

    builder.addCase(logout.fulfilled, state => {
      state.isLoading = false;
      state.user = null;
    });

    builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
      state.user = payload.user;
    });
  },
});

export default userSlice.reducer;
