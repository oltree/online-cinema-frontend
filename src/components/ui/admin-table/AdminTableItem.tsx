import { FC } from 'react';

import styles from './AdminTable.module.scss';

import AdminActions from './AdminActions';
import { IUserData } from './admin-table.type';

interface IAdminTableItem {
  tableItem: IUserData;
  onRemove: (id: string) => void;
}
const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, onRemove }) => (
  <div className={styles.row}>
    {tableItem.items.map(value => (
      <p key={value} className={styles.item}>
        {value}
      </p>
    ))}

    <AdminActions
      editUrl={tableItem.editUrl}
      onRemove={() => onRemove(tableItem._id)}
    />
  </div>
);

export default AdminTableItem;
