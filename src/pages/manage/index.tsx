import { NextPageAuth } from '@/shared/types/roles.types';

const AdminPage: NextPageAuth = () => {
  return <div>index</div>;
};

AdminPage.isOnlyAdmin = true;

export default AdminPage;
