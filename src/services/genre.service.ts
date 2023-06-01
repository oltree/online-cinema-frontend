import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface';

import { IGenre } from '@/shared/interfaces/genre.interface';

import api from '@/api/config';

import { getGenresUrl } from '@/configs/api.config';

export const GenreService = {
  async getAll(searchTerm?: string) {
    const response = await api.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm
        ? {
            searchTerm,
          }
        : {},
    });

    return response?.data;
  },

  async create() {
    const response = await api.post<string>(getGenresUrl(''));

    return response?.data;
  },

  async delete(_id: string) {
    const response = await api.delete<string>(getGenresUrl(`/${_id}`));

    return response?.data;
  },

  async update(_id: string, data: IGenreEditInput) {
    const response = await api.put<string>(getGenresUrl(`/${_id}`), data);

    return response?.data;
  },

  async getById(_id: string) {
    const response = await api.get<IGenreEditInput>(getGenresUrl(`/${_id}`));

    return response?.data;
  },

  async getBySlug(slug: string) {
    const response = await api.get<IGenre>(getGenresUrl(`/by-slug/${slug}`));

    return response?.data;
  },
};
