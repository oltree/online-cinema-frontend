import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, memo } from 'react';

import { MaterialIcon } from '@/components/ui/material-icon';

import { useDispatchedActions } from '@/hooks/useDispatchedActions';

import styles from './Menu.module.scss';

import { IMenuItem } from './menu.types';

interface MenuItemProps {
  item: IMenuItem;
}

export const MenuItem: FC<MenuItemProps> = memo(({ item }) => {
  const { asPath } = useRouter();
  const isActiveItem = asPath === item.link;

  const { logout } = useDispatchedActions();
  const isLogout = item.title === 'Logout';

  return (
    <li className={cn(styles.item, isActiveItem && styles.active)}>
      <Link
        href={item.link}
        className={styles.link}
        onClick={() => {
          isLogout && logout();
        }}
      >
        <MaterialIcon name={item.icon} />
        <p className={styles.title}>{item.title}</p>
      </Link>
    </li>
  );
});
