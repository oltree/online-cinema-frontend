import { FC, memo } from 'react';

import { Loader } from '@/components/ui/loader';

import { NUMBER_OF_DOWNLOAD_GENRES } from '@/shared/constants/genres';

import Menu from '../Menu';

import { usePopularGenres } from './usePopularGenres';

export const GenresMenu: FC = memo(() => {
  const { isLoading, data } = usePopularGenres();
  const genresMenu = { title: 'Popular genres', items: data || [] };

  return isLoading ? (
    <div className='mr-10 mb-10'>
      <Loader count={NUMBER_OF_DOWNLOAD_GENRES} className='h-7' />
    </div>
  ) : (
    <Menu menu={genresMenu} />
  );
});
