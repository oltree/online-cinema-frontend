import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Gallery } from '@/components/ui/gallery';
import { Heading } from '@/components/ui/heading';
import Slider from '@/components/ui/slider/Slider';
import { SubHeading } from '@/components/ui/sub-heading';

import { HomePageProps } from './home.interface';

export const Home: FC<HomePageProps> = ({ slides, trendingMovies, actors }) => (
  <Meta
    title='Movies online'
    description='Watch MovieApp movies and TV shows online or stream right to your browser.'
  >
    <Heading
      title='Watch movies online'
      className='mb-8 text-gray-300 text-xl'
    />

    {slides.length && <Slider slides={slides} />}

    <div className='mb-10'>
      <SubHeading title='Trending now' />
      {trendingMovies.length && <Gallery items={trendingMovies} />}
    </div>

    <div className='mb-10'>
      <SubHeading title='Best actors' />
      {actors.length && <Gallery items={actors} />}
    </div>
  </Meta>
);
