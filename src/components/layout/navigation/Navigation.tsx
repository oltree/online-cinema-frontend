import cn from 'classnames';
import dynamic from 'next/dynamic';
import { FC } from 'react';

import styles from './Navigation.module.scss';

import Logo from './Logo';
import GenresMenu from './menu/genres/GenresMenu';
import { generalMenu, mainMenu } from './menu/menu.data';

interface NavigationProps {
  className?: string;
}

const DynamicMenu = dynamic(() => import('./menu/Menu'), {
  ssr: false,
});

const Navigation: FC<NavigationProps> = ({ className }) => (
  <div className={cn(styles.navigation, className)}>
    <Logo />
    <DynamicMenu menu={mainMenu} />
    <GenresMenu />
    <DynamicMenu menu={generalMenu} />
  </div>
);

export default Navigation;
