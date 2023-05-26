import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import AdminSearch from '@/components/ui/admin-table/AdminSearch';
import AdminTable from '@/components/ui/admin-table/AdminTable';
import { Heading } from '@/components/ui/heading';

import { useUsers } from './useUsers';

const Users: FC = () => {
  const { searchTerm, handleSearch, isLoading, data, deleteAsync } = useUsers();

  return (
    <Meta title='Users'>
      <AdminNavigation />
      <Heading title='Users' />
      <AdminSearch searchTerm={searchTerm} onSearch={handleSearch} />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Email', 'Data register', 'Actions']}
        onRemove={deleteAsync}
        tableItems={data || []}
      />
    </Meta>
  );
};

export default Users;
