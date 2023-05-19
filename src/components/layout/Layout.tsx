import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

import Navigation from './navigation/Navigation';
import Sidebar from './sidebar/Sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation className={styles.leftbar} />
      <div className={styles.content}>{children}</div>
      <Sidebar className={styles.rightbar} />
    </div>
  );
};

export default Layout;
