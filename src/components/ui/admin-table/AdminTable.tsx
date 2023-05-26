import { FC } from 'react';

import { Loader } from '@/components/ui/loader';

import styles from './AdminTable.module.scss';

import AdminHeader from './AdminHeader';
import AdminTableItem from './AdminTableItem';
import { IUserData } from './admin-table.type';

interface AdminTableProps {
  tableItems: IUserData[];
  isLoading: boolean;
  onRemove: (id: string) => void;
}

const AdminTable: FC<AdminTableProps> = ({
  tableItems,
  isLoading,
  onRemove,
}) => (
  <>
    <AdminHeader />

    {isLoading ? (
      <Loader count={1} height={48} />
    ) : tableItems.length ? (
      tableItems.map(tableItem => (
        <AdminTableItem
          key={tableItem._id}
          tableItem={tableItem}
          onRemove={onRemove}
        />
      ))
    ) : (
      <div className={styles.notFound}>Elements not found!</div>
    )}
  </>
);

export default AdminTable;
