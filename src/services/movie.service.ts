import { Routes } from '@/shared/enums/routes.enum';
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
  async getPopularMovies() {
    const { data } = await api.get<IMovie[]>(getMoviesUrl(Routes.Popular));

    return data;
  },
};
