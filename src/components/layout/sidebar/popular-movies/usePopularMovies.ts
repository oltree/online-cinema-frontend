import { useMemo } from 'react';
import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

export const usePopularMovies = () => {
  const { isLoading, data } = useQuery(
    'Popular sidebar movies',
    () => MovieService.getPopular(),
    { select: data => data.slice(0, 3) }
  );

  return useMemo(() => ({ isLoading, popularMovies: data }), [isLoading, data]);
};
