import Movies from '@/components/screens/admin/movies/Movies';

import { NextPageAuth } from '@/shared/types/roles.types';

const MoviesPage: NextPageAuth = () => <Movies />;

MoviesPage.isOnlyAdmin = true;

export default MoviesPage;
