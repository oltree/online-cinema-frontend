import { IMovie } from '@/shared/interfaces/movie.interface';

import { api } from '@/api/interceptors';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
  async getAllMovies(genreSearchFilter?: string) {
    return api.get<IMovie[]>(getMoviesUrl(``), {
      params: genreSearchFilter
        ? {
            genreSearchFilter,
          }
        : {},
    });
  },
};
