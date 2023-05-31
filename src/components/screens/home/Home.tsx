import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';
import Slider from '@/components/ui/slider/Slider';
import { ISlide } from '@/components/ui/slider/slider.interface';

interface HomeProps {
  slides: ISlide[];
}

const Home: FC<HomeProps> = ({ slides }) => {
  return (
    <Meta
      title='Movies online'
      description='Watch MovieApp movies and TV shows online or stream right to your browser.'
    >
      <Heading
        title='Watch movies online'
        className='mb-8 text-gray-300 text-xl'
      />

      {slides.length && <Slider slides={slides} />}
    </Meta>
  );
};

export default Home;
