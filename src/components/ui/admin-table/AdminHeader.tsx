import cn from 'classnames';
import { FC } from 'react';

import styles from './AdminTable.module.scss';

const HEADERS = ['Email', 'Data register', 'Actions'];

const AdminHeader: FC = () => (
  <div className={cn(styles.row, styles.header)}>
    {HEADERS.map(item => (
      <p key={item} className={styles.item}>
        {item}
      </p>
    ))}
  </div>
);

export default AdminHeader;
