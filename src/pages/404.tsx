import { NextPage } from 'next';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';

const Error404: NextPage = () => (
  <Meta title='Page not found'>
    <Heading title='404 - Page not found!' />
  </Meta>
);

export default Error404;
