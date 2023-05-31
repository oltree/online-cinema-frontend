import axios from 'axios';
import Cookies from 'js-cookie';

import { removeTokensFromCookies } from '@/services/auth/auth.helpers';
import { AuthService } from '@/services/auth/auth.service';

import { API_URL } from '@/configs/api.config';

import { getContentType, getErrorMesssage } from './config.helper';

const api = axios.create({
  baseURL: API_URL,
  headers: getContentType(),
});

api.interceptors.request.use(config => {
  const accessToken = Cookies.get('accessToken');

  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

api.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        getErrorMesssage(error) === 'jwt expired' ||
        getErrorMesssage(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;

      try {
        await AuthService.getNewTokens();

        return api.request(originalRequest);
      } catch (e) {
        if (getErrorMesssage(e) === 'jwt expired') removeTokensFromCookies();
      }
    }

    throw error;
  }
);

export default api;
