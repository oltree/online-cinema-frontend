import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { Loader } from '@/components/ui/loader';
import { MaterialIcon } from '@/components/ui/material-icon';

import { NUMBER_OF_DOWNLOAD_MOVIES } from '@/shared/constants/movies';
import { Routes } from '@/shared/enums/routes.enum';

import { getMovieUrl } from '@/configs/url.config';

import styles from './PopularMovies.module.scss';

import { formatGenres } from './formatGenres';
import { usePopularMovies } from './usePopularMovies';

export const PopularMovies: FC = memo(() => {
  const { isLoading, popularMovies } = usePopularMovies();

  return isLoading ? (
    <Loader count={NUMBER_OF_DOWNLOAD_MOVIES} className={styles.loader} />
  ) : (
    <div className={styles.moviesContainer}>
      <p className={styles.heading}>Popular Movies</p>
      {popularMovies?.map(movie => (
        <div key={movie._id} className={styles.movie}>
          <Link href={getMovieUrl(movie.slug)} className={styles.poster}>
            <Image
              width={65}
              height={97}
              src={movie.poster}
              alt={movie.title}
              priority
            />
          </Link>
          <div className={styles.info}>
            <p className={styles.title}>{movie.title}</p>
            <p className={styles.genres}>{formatGenres(movie.genres)}</p>
            <div className={styles.rating}>
              <MaterialIcon name='MdStarRate' />
              <p className={styles.grade}>{movie.rating.toFixed(1)}</p>
            </div>
          </div>
        </div>
      ))}
      <Link href={Routes.Trending} className={styles.link}>
        See more
      </Link>
    </div>
  );
});
