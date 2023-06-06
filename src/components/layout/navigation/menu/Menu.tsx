import { FC, memo } from 'react';

import styles from './Menu.module.scss';

import { MenuItem } from './MenuItem';
import { IMenu } from './menu.types';
import { useFilteredMenuItems } from './useFilteredMenuItems';

interface MenuProps {
  menu: IMenu;
}

const Menu: FC<MenuProps> = ({ menu }) => {
  const { title, items } = useFilteredMenuItems(menu);

  return (
    <nav className={styles.menu}>
      <p className={styles.heading}>{title}</p>
      <ul className={styles.items}>
        {items.map(item => (
          <MenuItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default memo(Menu);
