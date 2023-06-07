import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import AdminSearch from '@/components/ui/admin-table/AdminSearch';
import AdminTable from '@/components/ui/admin-table/AdminTable';
import { Heading } from '@/components/ui/heading';

import { useActors } from './useActors';

export const Actors: FC = () => {
  const {
    createAsync,
    data,
    isLoading,
    deleteAsync,
    searchTerm,
    handleSearch,
  } = useActors();

  return (
    <Meta title='Actors'>
      <AdminNavigation />
      <Heading title='Actors' />
      <AdminSearch
        searchTerm={searchTerm}
        onClick={createAsync}
        onSearch={handleSearch}
      />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Name', 'Count movies', 'Actions']}
        tableItems={data || []}
        onRemove={deleteAsync}
      />
    </Meta>
  );
};
