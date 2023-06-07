import { Movies } from '@/components/screens/admin/movies';

import { NextPageAuth } from '@/shared/types/roles.types';

const MoviesPage: NextPageAuth = () => <Movies />;

MoviesPage.isOnlyAdmin = true;

export default MoviesPage;
