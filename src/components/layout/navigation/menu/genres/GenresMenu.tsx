import { FC } from 'react';

import { Loader } from '@/components/ui/loader';

import Menu from '../Menu';

import { usePopularGenres } from './usePopularGenres';

const NUMBER_OF_DOWNLOAD_GENRES = 5;

const GenresMenu: FC = () => {
  const { isLoading, data } = usePopularGenres();
  const genresMenu = { title: 'Popular genres', items: data || [] };

  return isLoading ? (
    <div className='mr-10 mb-10'>
      <Loader count={NUMBER_OF_DOWNLOAD_GENRES} className='h-7 mt-5' />
    </div>
  ) : (
    <Menu menu={genresMenu} />
  );
};

export default GenresMenu;
