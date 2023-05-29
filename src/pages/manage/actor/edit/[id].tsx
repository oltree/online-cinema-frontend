import ActorEdit from '@/components/screens/admin/actor/ActorEdit';

import { NextPageAuth } from '@/shared/types/roles.types';

const ActorEditPage: NextPageAuth = () => <ActorEdit />;

ActorEditPage.isOnlyAdmin = true;

export default ActorEditPage;
