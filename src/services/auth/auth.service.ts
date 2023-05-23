import Cookies from 'js-cookie';

import { api } from '@/api/api';
import { getContentType } from '@/api/api.helper';

import { getAuthUrl } from '@/configs/api.config';

import { IAuthResponse } from '@/store/user/user.interface';

import { removeTokensFromCookies, saveAuthDataToStorage } from './auth.helpers';

export const AuthService = {
  async register(email: string, password: string) {
    const response = await api.post<IAuthResponse>(getAuthUrl('/register'), {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveAuthDataToStorage(response.data);
    }

    return response;
  },

  async login(email: string, password: string) {
    const response = await api.post<IAuthResponse>(getAuthUrl('/login'), {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveAuthDataToStorage(response.data);
    }

    return response;
  },

  logout() {
    removeTokensFromCookies();
    localStorage.removeItem('user');
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await api.post<IAuthResponse>(
      getAuthUrl('/login/access-token'),
      { refreshToken },
      { headers: getContentType() }
    );

    if (response.data.accessToken) {
      saveAuthDataToStorage(response.data);
    }

    return response;
  },
};
