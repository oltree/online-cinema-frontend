import { useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';

export const usePopularMovies = () => {
  const { isLoading, data } = useQuery('Popular sidebar movies', () =>
    MovieService.getPopular()
  );

  return { isLoading, popularMovies: data };
};
