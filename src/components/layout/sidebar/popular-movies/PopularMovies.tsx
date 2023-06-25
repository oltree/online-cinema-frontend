import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { Loader } from '@/components/ui/loader';
import { MaterialIcon } from '@/components/ui/material-icon';
import { MovieList } from '@/components/ui/movie-list';

import { NUMBER_OF_DOWNLOAD_MOVIES } from '@/shared/constants/movies';
import { Routes } from '@/shared/enums/routes.enum';

import { usePopularMovies } from './usePopularMovies';

export const PopularMovies: FC = memo(() => {
  const { isLoading, popularMovies } = usePopularMovies();

  const popularList = {
    link: Routes.Trending,
    movies: popularMovies || [],
    title: 'Popular movies',
  };

  return isLoading ? (
    <Loader count={NUMBER_OF_DOWNLOAD_MOVIES} className='h-28 mb-5' />
  ) : (
    <MovieList list={popularList} />
  );
});
