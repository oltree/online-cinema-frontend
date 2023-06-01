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

const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { asPath } = useRouter();
  const isActiveStyle = asPath === item.link;

  const { logout } = useDispatchedActions();
  const isLogout = item.title === 'Logout';

  return (
    <li className={cn(styles.item, isActiveStyle && styles.active)}>
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
};

export default memo(MenuItem);
