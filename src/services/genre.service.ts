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
};
