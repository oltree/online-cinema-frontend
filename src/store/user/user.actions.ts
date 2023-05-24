import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastr } from 'react-redux-toastr';

import { AuthType } from '@/shared/types/auth.types';

import { AuthService } from '@/services/auth/auth.service';

import { getErrorMesssage } from '@/api/api.helper';

import { showErrorNotification } from '@/utils/showErrorNotification';

import { IAuthResponse } from './user.interface';

export const register = createAsyncThunk<IAuthResponse, AuthType>(
  'auth/register',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(email, password);
      toastr.success('Registration', 'Completed successfully!');

      return response.data;
    } catch (e) {
      showErrorNotification(e);

      return rejectWithValue(e);
    }
  }
);

export const login = createAsyncThunk<IAuthResponse, AuthType>(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(email, password);
      toastr.success('Login', 'Completed successfully!');

      return response.data;
    } catch (e) {
      showErrorNotification(e);

      return rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async () => await AuthService.logout()
);

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/check-auth',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await AuthService.getNewTokens();

      return response.data;
    } catch (e) {
      if (getErrorMesssage(e) === 'jwt expired') {
        toastr.error(
          'Logout',
          'Your authorization is finished, please login again.'
        );

        dispatch(logout());
      }

      return rejectWithValue(e);
    }
  }
);
