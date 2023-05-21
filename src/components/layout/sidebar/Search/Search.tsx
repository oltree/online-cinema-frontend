import { FC } from 'react';

import { SearchField } from '@/components/ui/search-field';

import SearchList from './SearchList/SearchList';
import { useSearch } from './useSearch';

const Search: FC = () => {
  const { searchTerm, isSuccess, popularMovies, onSearch } = useSearch();

  return (
    <div className='relative'>
      <SearchField searchTerm={searchTerm} onSearch={onSearch} />
      {isSuccess && <SearchList movies={popularMovies || []} />}
    </div>
  );
};

export default Search;
