import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { DEBOUNCE_DELAY } from '@/shared/constants/delays';

import { MovieService } from '@/services/movie.service';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const { isSuccess, data } = useQuery(
    ['search movie list', debouncedSearch],
    () => MovieService.getAll(debouncedSearch),
    {
      select: data => data,
      enabled: !!debouncedSearch,
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return {
    searchTerm,
    isSuccess,
    popularMovies: data,
    onSearch: handleSearch,
  };
};
