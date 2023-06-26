import { FC, memo } from 'react';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';

import { useAuth } from '@/hooks/useAuth';

import { getMovieUrl } from '@/configs/url.config';

import styles from './Favorites.module.scss';

import { FavoriteItem } from './FavoriteItem';
import { useFavorites } from './useFavorites';

export const Favorites: FC = memo(() => {
  const { favoritesMovies, isLoading } = useFavorites();

  const { user } = useAuth();

  if (!user) return null;

  return (
    <Meta title='Favorites'>
      <Heading title={'Favorites'} />
      <section className={styles.favorites}>
        {isLoading ? (
          <Loader
            count={3}
            className={styles.skeletonLoader}
            containerClassName={styles.containerLoader}
          />
        ) : (
          favoritesMovies?.map(movie => (
            <FavoriteItem
              key={movie._id}
              item={{
                name: movie.title,
                posterPath: movie.bigPoster,
                link: getMovieUrl(movie.slug),
                title: movie.title,
                _id: movie._id,
              }}
            />
          ))
        )}
      </section>
    </Meta>
  );
});
