import { useQuery } from 'react-query';

import { useAuth } from '@/hooks/useAuth';

import { UserService } from '@/services/user.service';

export const useFavorites = () => {
  const { user } = useAuth();

  const {
    isLoading,
    data: favoritesMovies,
    refetch,
  } = useQuery('Favorite movies', () => UserService.getFavorites(), {
    enabled: !!user,
  });

  return { isLoading, favoritesMovies, refetch };
};
