import { FC, memo } from 'react';

import { SearchField } from '@/components/ui/search-field';

import { SearchList } from './search-list';
import { useSearch } from './useSearch';

//todo: rename folder to search
export const Search: FC = memo(() => {
  const { searchTerm, isSuccess, popularMovies, onSearch } = useSearch();

  return (
    <div className='relative mb-5'>
      <SearchField searchTerm={searchTerm} onSearch={onSearch} />
      {isSuccess && <SearchList movies={popularMovies || []} />}
    </div>
  );
});
