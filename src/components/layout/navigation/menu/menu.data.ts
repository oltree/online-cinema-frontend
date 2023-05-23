import { Routes } from '@/shared/enums/routes.enum';

import { getAdminHomeUrl } from '@/configs/url.config';

import { IMenu } from './menu.types';

export const mainMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: Routes.Home,
      title: 'Home',
    },
    {
      icon: 'MdExplore',
      link: Routes.Genres,
      title: 'Discovery',
    },
    {
      icon: 'MdRefresh',
      link: Routes.Fresh,
      title: 'Fresh movies',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: Routes.Trending,
      title: 'Trending now',
    },
  ],
};

export const generalMenu: IMenu = {
  title: 'General',
  items: [
    {
      icon: 'MdSettings',
      link: Routes.Profile,
      title: 'Profile',
      isAuth: true,
    },
    {
      icon: 'MdLogin',
      link: Routes.Auth,
      title: 'Login',
      isAuth: false,
    },
    {
      icon: 'MdLogout',
      link: Routes.Auth,
      title: 'Logout',
      isAuth: true,
    },
    {
      icon: 'MdOutlineLock',
      link: getAdminHomeUrl(),
      title: 'Admin panel',
      isAuth: true,
      isAdmin: true,
    },
  ],
};
