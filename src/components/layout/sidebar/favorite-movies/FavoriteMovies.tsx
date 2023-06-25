import { FC, memo } from 'react';

import { useFavorites } from '@/components/screens/favorites/useFavorites';
import { Loader } from '@/components/ui/loader';
import { MovieList } from '@/components/ui/movie-list';

import { useAuth } from '@/hooks/useAuth';

const FavoriteMovies: FC = memo(() => {
  const { user } = useAuth();
  const { isLoading, favoritesMovies } = useFavorites();

  const favoriteList = {
    link: '/favorites',
    movies: favoritesMovies?.slice(0, 3) || [],
    title: 'Favorites',
  };

  return (
    <>
      {user ? (
        <>
          {isLoading ? (
            <div className='mt-11'>
              <Loader count={3} className='h-28 mb-4' />
            </div>
          ) : (
            <MovieList list={favoriteList} />
          )}
        </>
      ) : (
        <p
          className={
            'mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80'
          }
        >
          For viewing favorites please authorize!
        </p>
      )}
    </>
  );
});

export default FavoriteMovies;
