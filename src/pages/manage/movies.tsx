import { NextPageAuth } from '@/shared/types/roles.types';

const MoviesPage: NextPageAuth = () => {
  return <div>movies</div>;
};

MoviesPage.isOnlyAdmin = true;

export default MoviesPage;
