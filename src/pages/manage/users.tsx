import Users from '@/components/screens/admin/users/Users';

import { NextPageAuth } from '@/shared/types/roles.types';

const UsersPage: NextPageAuth = () => <Users />;

UsersPage.isOnlyAdmin = true;

export default UsersPage;
