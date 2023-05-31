import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.enterface';

import { Routes } from '@/shared/enums/routes.enum';
import { IMovie } from '@/shared/interfaces/movie.interface';

import api from '@/api/config';

import { getMoviesUrl } from '@/configs/api.config';

export const MovieService = {
  async getAll(searchTerm?: string) {
    const response = await api.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async getPopular() {
    const response = await api.get<IMovie[]>(getMoviesUrl(Routes.Popular));

    return response?.data;
  },

  async create() {
    const response = await api.post<string>(getMoviesUrl(''));

    return response?.data;
  },

  async delete(_id: string) {
    const response = await api.delete<string>(getMoviesUrl(`/${_id}`));

    return response?.data;
  },

  async update(_id: string, data: IMovieEditInput) {
    const response = await api.put<string>(getMoviesUrl(`/${_id}`), data);

    return response?.data;
  },

  async getById(_id: string) {
    const response = await api.get<IMovieEditInput>(getMoviesUrl(`/${_id}`));

    return response?.data;
  },
};
