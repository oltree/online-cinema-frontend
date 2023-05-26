import { Routes } from '@/shared/enums/routes.enum';
import { IMovie } from '@/shared/interfaces/movie.interface';

import api from '@/api/api';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
  async getAllMovies(searchTerm?: string) {
    const response = await api.get<IMovie[]>(getMoviesUrl(``), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async getPopularMovies() {
    const response = await api.get<IMovie[]>(getMoviesUrl(Routes.Popular));

    return response?.data;
  },
};
