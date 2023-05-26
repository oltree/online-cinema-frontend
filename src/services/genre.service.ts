import { IGenre } from '@/shared/interfaces/genre.interface';

import api from '@/api/api';

import { getGenresUrl } from '@/configs/api.config';

export const GenreService = {
  async getAllGenres(genreSearchFilter?: string) {
    const response = await api.get<IGenre[]>(getGenresUrl(``), {
      params: genreSearchFilter
        ? {
            genreSearchFilter,
          }
        : {},
    });

    return response?.data;
  },

  async createGenre() {
    const response = await api.post<string>(getGenresUrl(''));

    return response?.data;
  },

  async deleteGenre(_id: string) {
    const response = await api.delete<string>(getGenresUrl(`/${_id}`));

    return response?.data;
  },
};
