import cn from 'classnames';
import { FC, memo, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import styles from './FavoriteButton.module.scss';

import { useFavorites } from '../../favorites/useFavorites';

interface FavoriteButtonProps {
  movieId: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = memo(({ movieId }) => {
  const [isSmashed, setIsSmashed] = useState(false);

  const { favoritesMovies, refetch } = useFavorites();

  useEffect(() => {
    if (favoritesMovies) {
      const isMovie = favoritesMovies.some(movie => movie._id === movieId);
      if (isSmashed !== isMovie) setIsSmashed(isMovie);
    }
  }, [favoritesMovies, isSmashed, movieId]);

  const { mutateAsync } = useMutation(
    'Update actor',
    () => UserService.toggleFavorite(movieId),
    {
      onSuccess() {
        setIsSmashed(!isSmashed);
        refetch();
      },

      onError(error: string) {
        toastr.error(error, 'Update favorite list');
      },
    }
  );

  return (
    <button
      onClick={() => mutateAsync()}
      className={cn(styles.button, isSmashed && styles.animate)}
      style={{ backgroundImage: `url(/heart-animation.png)` }}
      aria-label='add like for the movies'
    />
  );
});
