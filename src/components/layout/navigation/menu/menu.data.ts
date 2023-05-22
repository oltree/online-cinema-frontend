import { Routes } from '@/shared/enums/routes.enum';

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
  items: [],
};
