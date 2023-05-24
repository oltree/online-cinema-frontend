import Admin from '@/components/screens/admin/Admin';

import { NextPageAuth } from '@/shared/types/roles.types';

const AdminPage: NextPageAuth = () => <Admin />;

AdminPage.isOnlyAdmin = true;

export default AdminPage;
