import { IMenu } from './menu.types';

export const mainMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home',
    },
    {
      icon: 'MdExplore',
      link: '/genres',
      title: 'Discovery',
    },
    {
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh movies',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now',
    },
  ],
};

export const generalMenu: IMenu = {
  title: 'General',
  items: [],
};
