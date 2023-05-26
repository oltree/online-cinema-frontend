import Genres from '@/components/screens/admin/genres/Genres';

import { NextPageAuth } from '@/shared/types/roles.types';

const GenresPage: NextPageAuth = () => <Genres />;

GenresPage.isOnlyAdmin = true;

export default GenresPage;
