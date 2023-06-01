import { FC, memo } from 'react';

import { Meta } from '@/components/meta';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { getMovieUrl } from '@/configs/url.config';

import styles from './Catalog.module.scss';

import { Description } from '../description';
import GalleryItem from '../gallery/GalleryItem';
import { Heading } from '../heading';

interface CatalogProps {
  title: string;
  movies: IMovie[];
  description?: string;
}

export const Catalog: FC<CatalogProps> = memo(
  ({ title, movies, description }) => (
    <Meta title={title} description={description}>
      <Heading title={title} className={styles.heading} />
      {description && (
        <Description text={description} className={styles.description} />
      )}

      <section className={styles.movies}>
        {movies.map(movie => (
          <GalleryItem
            key={movie._id}
            variant='horizontal'
            item={{
              name: movie.title,
              posterPath: movie.bigPoster,
              link: getMovieUrl(movie.slug),
              content: {
                title: movie.title,
              },
            }}
          />
        ))}
      </section>
    </Meta>
  )
);
