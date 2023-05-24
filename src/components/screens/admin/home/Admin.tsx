import { FC } from 'react';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Heading } from '@/components/ui/heading';

import Statistics from './statistics/Statistics';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Some statistics' />
      <Statistics />
    </Meta>
  );
};

export default Admin;
