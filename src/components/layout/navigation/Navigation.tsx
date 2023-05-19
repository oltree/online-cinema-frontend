import cn from 'classnames';
import { FC } from 'react';

import { API_URL } from '@/configs/api.config';

import styles from './Navigation.module.scss';

import Logo from './Logo';
import Menu from './menu/Menu';
import GenresMenu from './menu/genres/GenresMenu';
import { generalMenu, mainMenu } from './menu/menu.data';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={cn(styles.navigation, className)}>
      <Logo />
      <Menu menu={mainMenu} />
      <GenresMenu />
      <Menu menu={generalMenu} />
    </div>
  );
};

export default Navigation;
