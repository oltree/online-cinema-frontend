import { Admin } from '@/components/screens/admin/home';

import { NextPageAuth } from '@/shared/types/roles.types';

const AdminPage: NextPageAuth = () => <Admin />;

AdminPage.isOnlyAdmin = true;

export default AdminPage;
