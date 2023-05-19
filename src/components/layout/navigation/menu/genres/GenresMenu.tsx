import { FC } from 'react';

import Menu from '../Menu';
import { generalMenu } from '../menu.data';

import { usePopularGenres } from './usePopularGenres';

const GenresMenu: FC = () => {
  const { isLoading, data } = usePopularGenres();

  return isLoading ? (
    <div className='mx-11 mb-6'>Loading...</div>
  ) : (
    <Menu menu={{ title: 'Popular genres', items: data || [] }} />
  );
};

export default GenresMenu;
