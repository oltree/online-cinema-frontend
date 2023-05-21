import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { getMovieUrl } from '@/configs/url.config';

import styles from './SearchList.module.scss';

interface SearchListProps {
  movies: IMovie[];
}

const SearchList: FC<SearchListProps> = ({ movies }) => (
  <div className={styles.list}>
    {movies.length ? (
      movies.map(movie => (
        <Link
          key={movie._id}
          href={getMovieUrl(movie.slug)}
          className={styles.link}
        >
          <Image
            src={movie.poster || ''}
            alt={movie.title}
            width={50}
            height={50}
          />
          <p className={styles.movieName}>{movie.title}</p>
        </Link>
      ))
    ) : (
      <p className={styles.notFound}>Movies not found!</p>
    )}
  </div>
);

export default SearchList;
