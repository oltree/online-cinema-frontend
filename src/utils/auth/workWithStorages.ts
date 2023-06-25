import Cookies from 'js-cookie';

import { IAuthResponse, ITokens } from '@/store/user/user.interface';

export const saveTokensToCookies = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
};

export const removeTokensFromCookies = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};

export const saveAuthDataToStorage = (data: IAuthResponse) => {
  saveTokensToCookies(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
