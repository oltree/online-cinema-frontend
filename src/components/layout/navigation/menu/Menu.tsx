import { FC } from 'react';

import styles from './Menu.module.scss';

import MenuItem from './MenuItem';
import AuthItems from './auth/AuthItems';
import { IMenu } from './menu.types';

interface MenuProps {
  menu: IMenu;
}

const Menu: FC<MenuProps> = ({ menu }) => {
  const { title, items } = menu;

  return (
    <div className={styles.menu}>
      <p className={styles.heading}>{title}</p>
      <ul className={styles.items}>
        {items.map(item => (
          <MenuItem key={item.link} item={item} />
        ))}
      </ul>
      {title === 'General' && <AuthItems />}
    </div>
  );
};

export default Menu;
