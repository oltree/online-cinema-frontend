import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';

import Navigation from './navigation/Navigation';
import Statistics from './statistics/Statistics';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <Navigation />
      <Heading title='Some statistics' />
      <Statistics />
    </Meta>
  );
};

export default Admin;
