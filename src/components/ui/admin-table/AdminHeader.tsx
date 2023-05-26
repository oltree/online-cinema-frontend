import cn from 'classnames';
import { FC } from 'react';

import styles from './AdminTable.module.scss';

interface AdminHeaderProps {
  headerItems: string[];
}

const AdminHeader: FC<AdminHeaderProps> = ({ headerItems }) => (
  <div className={cn(styles.row, styles.header)}>
    {headerItems.map(item => (
      <p key={item} className={styles.item}>
        {item}
      </p>
    ))}
  </div>
);

export default AdminHeader;
