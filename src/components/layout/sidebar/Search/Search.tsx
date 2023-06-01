import { FC, memo } from 'react';

import { SearchField } from '@/components/ui/search-field';

import SearchList from './SearchList/SearchList';
import { useSearch } from './useSearch';

const Search: FC = () => {
  const { searchTerm, isSuccess, popularMovies, onSearch } = useSearch();

  return (
    <div className='relative mb-5'>
      <SearchField searchTerm={searchTerm} onSearch={onSearch} />
      {isSuccess && <SearchList movies={popularMovies || []} />}
    </div>
  );
};

export default memo(Search);
