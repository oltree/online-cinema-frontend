import cn from 'classnames';
import { FC } from 'react';

import styles from './Navigation.module.scss';

import Logo from './Logo';
import Menu from './menu/Menu';
import { generalMenu, mainMenu } from './menu/menu.data';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  return (
    <div className={cn(styles.navigation, className)}>
      <Logo />
      <Menu menu={mainMenu} />
      <Menu menu={generalMenu} />
    </div>
  );
};

export default Navigation;
