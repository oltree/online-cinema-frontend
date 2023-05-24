import { FC, memo } from 'react';

import styles from './AdminNavigation.module.scss';

import NavItem from './NavItem';
import { navItems } from './navigation.data';

export const AdminNavigation: FC = memo(() => (
  <nav className={styles.navigation}>
    <ul className={styles.list}>
      {navItems.map(item => (
        <NavItem key={item.title} item={item} />
      ))}
    </ul>
  </nav>
));
