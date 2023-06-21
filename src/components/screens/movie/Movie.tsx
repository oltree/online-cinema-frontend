import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Banner } from '@/components/ui/banner';
import { Gallery } from '@/components/ui/gallery';
import { SubHeading } from '@/components/ui/sub-heading';

import { Content } from './content';
import { MoviePageProps } from '@/pages/movie/[slug]';

export const Movie: FC<MoviePageProps> = ({ movie, similarMovies }) => {
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`}>
      <Banner
        image={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />

      <div>video player</div>

      <div className='mt-12'>
        <SubHeading title='Similar' />
        <Gallery items={similarMovies} />
      </div>

      <div>rating</div>
    </Meta>
  );
};
