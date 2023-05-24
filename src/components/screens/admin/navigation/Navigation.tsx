import { FC } from 'react';

import NavItem from '@/components/screens/admin/navigation/NavItem';

import styles from './Navigation.module.scss';

import { navItems } from './navigation.data';

const Navigation: FC = () => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      {navItems.map(item => (
        <NavItem key={item.title} item={item} />
      ))}
    </ul>
  </nav>
);

export default Navigation;
