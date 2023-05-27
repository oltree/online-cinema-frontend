import GenreEdit from '@/components/screens/admin/genre/GenreEdit';

import { NextPageAuth } from '@/shared/types/roles.types';

const GenreEditPage: NextPageAuth = () => <GenreEdit />;

GenreEditPage.isOnlyAdmin = true;

export default GenreEditPage;
