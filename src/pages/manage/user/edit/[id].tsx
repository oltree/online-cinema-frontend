import { UserEdit } from '@/components/screens/admin/user';

import { NextPageAuth } from '@/shared/types/roles.types';

const UserEditPage: NextPageAuth = () => <UserEdit />;

UserEditPage.isOnlyAdmin = true;

export default UserEditPage;
