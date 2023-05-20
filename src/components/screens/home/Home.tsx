import { FC } from 'react';

import { Meta } from '@/components/meta';
import Heading from '@/components/ui/Heading';

const Home: FC = () => {
  return (
    <Meta
      title='Watch movies online'
      description='Watch MovieApp movies and TV shows online or stream right to your browser.'
    >
      <Heading
        title='Watch movies online'
        className='mb-8 text-gray-300 text-xl'
      />
    </Meta>
  );
};

export default Home;
