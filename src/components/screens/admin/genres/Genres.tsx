import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import AdminSearch from '@/components/ui/admin-table/AdminSearch';
import AdminTable from '@/components/ui/admin-table/AdminTable';
import { Heading } from '@/components/ui/heading';

import { useGenres } from './useGenres';

export const Genres: FC = () => {
  const {
    createAsync,
    data,
    isLoading,
    deleteAsync,
    searchTerm,
    handleSearch,
  } = useGenres();

  return (
    <Meta title='Genres'>
      <AdminNavigation />
      <Heading title='Genres' />
      <AdminSearch
        searchTerm={searchTerm}
        onClick={createAsync}
        onSearch={handleSearch}
      />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Name', 'Slug', 'Actions']}
        tableItems={data || []}
        onRemove={deleteAsync}
      />
    </Meta>
  );
};
