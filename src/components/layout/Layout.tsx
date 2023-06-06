import { FC, PropsWithChildren } from 'react';

import styles from './Layout.module.scss';

import { Navigation } from './navigation';
import { Sidebar } from './sidebar';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>
    <Navigation className={styles.leftbar} />
    <div className={styles.content}>{children}</div>
    <Sidebar className={styles.rightbar} />
  </div>
);
