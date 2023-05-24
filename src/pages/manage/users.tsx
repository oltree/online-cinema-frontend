import { NextPageAuth } from '@/shared/types/roles.types';

const UsersPage: NextPageAuth = () => {
  return <div>users</div>;
};

UsersPage.isOnlyAdmin = true;

export default UsersPage;
