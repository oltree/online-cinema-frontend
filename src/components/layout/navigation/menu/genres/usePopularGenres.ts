import { useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { GenreService } from '@/services/genre.service';

import { getGenreUrl } from '@/configs/url.config';

import { IMenuItem } from '../menu.types';

const GENRE_LIMIT = 4;
//TODO:.filter(genre => genre.icon) - remove?
export const usePopularGenres = () => {
  const queryData = useQuery(
    'Popular genres menu',
    () => GenreService.getAllGenres(),
    {
      select: data =>
        data
          .filter(genre => genre.icon)
          .map(
            (genre): IMenuItem => ({
              icon: genre.icon,
              link: getGenreUrl(genre.slug),
              title: genre.name,
            })
          )
          .splice(0, GENRE_LIMIT),
      onError(error: string) {
        toastr.error(error, 'Popular genres menu');
      },
    }
  );

  return queryData;
};
