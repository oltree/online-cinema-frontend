import { Routes } from '@/shared/enums/routes.enum';
import { IMovie } from '@/shared/interfaces/movie.interface';

import api from '@/api/api';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
  async getAllMovies(searchTerm?: string) {
    const response = await api.get<IMovie[]>(getMoviesUrl('/'), {
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

  async createMovie() {
    const response = await api.post<string>(getMoviesUrl('/'));

    return response?.data;
  },

  async deleteMovie(_id: string) {
    const response = await api.delete<string>(getMoviesUrl(`/${_id}`));

    return response?.data;
  },
};
