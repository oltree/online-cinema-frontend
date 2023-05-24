import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Heading } from '@/components/ui/heading';

const Users: FC = () => {
  return (
    <Meta title='Users'>
      <AdminNavigation />
      <Heading title='Users' />
    </Meta>
  );
};

export default Users;
