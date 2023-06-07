import { MovieEdit } from '@/components/screens/admin/movie';

import { NextPageAuth } from '@/shared/types/roles.types';

const MovieEditPage: NextPageAuth = () => <MovieEdit />;

MovieEditPage.isOnlyAdmin = true;

export default MovieEditPage;
