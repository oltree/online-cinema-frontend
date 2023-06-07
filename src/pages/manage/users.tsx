import { Users } from '@/components/screens/admin/users';

import { NextPageAuth } from '@/shared/types/roles.types';

const UsersPage: NextPageAuth = () => <Users />;

UsersPage.isOnlyAdmin = true;

export default UsersPage;
