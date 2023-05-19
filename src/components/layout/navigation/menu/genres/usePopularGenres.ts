import { useQuery } from 'react-query';

import { GenreService } from '@/services/genre.service';

import { getGenreUrl } from '@/configs/url.config';

import { IMenuItem } from '../menu.types';

const GENRE_LIMIT = 4;

export const usePopularGenres = () => {
  const queryData = useQuery(
    'popular genres menu',
    () => GenreService.getAll(),
    {
      select: ({ data }) =>
        data
          .map(
            (genre): IMenuItem => ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name,
            })
          )
          .splice(0, GENRE_LIMIT),
    }
  );

  return queryData;
};
