import { Profile } from '@/components/screens/profile';

import { NextPageAuth } from '@/shared/types/roles.types';

const ProfilePage: NextPageAuth = () => <Profile />;

ProfilePage.isOnlyUser = true;

export default ProfilePage;
