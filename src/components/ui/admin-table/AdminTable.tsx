import { FC } from 'react';

import { Loader } from '@/components/ui/loader';

import styles from './AdminTable.module.scss';

import AdminHeader from './AdminHeader';
import AdminTableItem from './AdminTableItem';
import { ITableItem } from './admin-table.type';

interface AdminTableProps {
  tableItems: ITableItem[];
  isLoading: boolean;
  headerItems: string[];
  onRemove: (id: string) => void;
}

const AdminTable: FC<AdminTableProps> = ({
  tableItems,
  isLoading,
  headerItems,
  onRemove,
}) => (
  <>
    <AdminHeader headerItems={headerItems} />

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
