import { useEffect } from 'react';
import { useMutation } from 'react-query';

import { MovieService } from '@/services/movie.service';

export const useUpdateCountMovieViews = (slug: string) => {
  const { mutateAsync } = useMutation('Update count movie views', () =>
    MovieService.updateCountMovieViews(slug)
  );

  useEffect(() => {
    mutateAsync();
  }, []);
};
