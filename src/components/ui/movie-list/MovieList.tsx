import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { getMovieUrl } from '@/configs/url.config';

import styles from './MovieList.module.scss';

import { MaterialIcon } from '../material-icon';

import { formatGenres } from './formatGenres';
import { IMovieList } from './movie-list.interfaces';

interface MovieListProps {
  list: IMovieList;
}

export const MovieList: FC<MovieListProps> = memo(({ list }) => (
  <div className={styles.moviesContainer}>
    <p className={styles.heading}>{list.title}</p>
    {list.movies?.map(movie => (
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
    <Link href={list.link} className={styles.link}>
      See more
    </Link>
  </div>
));
