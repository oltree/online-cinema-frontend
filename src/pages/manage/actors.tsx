import { Actors } from '@/components/screens/admin/actors';

import { NextPageAuth } from '@/shared/types/roles.types';

const ActorsPage: NextPageAuth = () => <Actors />;

ActorsPage.isOnlyAdmin = true;

export default ActorsPage;
