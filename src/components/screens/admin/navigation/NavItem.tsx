import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Navigation.module.scss';

import { INavItem } from './navigation.type';

const NavItem: FC<{ item: INavItem }> = ({ item: { title, link } }) => {
  const { asPath } = useRouter();
  const isActive = asPath === link;

  return (
    <li className={styles.item}>
      <Link href={link} className={cn(styles.link, isActive && styles.active)}>
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
