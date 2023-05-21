import { NextPage } from 'next';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';

const Error500: NextPage = () => (
  <Meta title='Page not found'>
    <Heading title='500 - Server-side error occurred!' />
  </Meta>
);

export default Error500;
