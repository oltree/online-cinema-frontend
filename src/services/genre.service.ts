import { IGenre } from '@/shared/interfaces/genre.interface';

import { api } from '@/api/interceptors';

import { getGenresUrl } from '@/configs/api.config';

export const GenreService = {
  async getAllGenres(genreSearchFilter?: string) {
    return api.get<IGenre[]>(getGenresUrl(``), {
      params: genreSearchFilter
        ? {
            genreSearchFilter,
          }
        : {},
    });
  },
};
