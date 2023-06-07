import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import AdminSearch from '@/components/ui/admin-table/AdminSearch';
import AdminTable from '@/components/ui/admin-table/AdminTable';
import { Heading } from '@/components/ui/heading';

import { useMovies } from './useMovies';

export const Movies: FC = () => {
  const {
    createAsync,
    data,
    isLoading,
    deleteAsync,
    searchTerm,
    handleSearch,
  } = useMovies();

  return (
    <Meta title='Movies'>
      <AdminNavigation />
      <Heading title='Movies' />
      <AdminSearch
        searchTerm={searchTerm}
        onClick={createAsync}
        onSearch={handleSearch}
      />
      <AdminTable
        isLoading={isLoading}
        headerItems={['Title', 'Genres', 'Rating', 'Actions']}
        tableItems={data || []}
        onRemove={deleteAsync}
      />
    </Meta>
  );
};
