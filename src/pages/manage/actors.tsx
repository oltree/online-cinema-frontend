import Actors from '@/components/screens/admin/actors/Actors';

import { NextPageAuth } from '@/shared/types/roles.types';

const ActorsPage: NextPageAuth = () => <Actors />;

ActorsPage.isOnlyAdmin = true;

export default ActorsPage;
