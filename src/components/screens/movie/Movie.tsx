import dynamic from 'next/dynamic';
import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Banner } from '@/components/ui/banner';
import { Gallery } from '@/components/ui/gallery';
import { SubHeading } from '@/components/ui/sub-heading';

import { Content } from './content';
import { MoviePageProps } from '@/pages/movie/[slug]';

const DynamicVideoPlayer = dynamic(
  () => import('@/components/ui/video-player/VideoPlayer'),
  { ssr: false }
);

export const Movie: FC<MoviePageProps> = ({ movie, similarMovies }) => {
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`}>
      <Banner
        image={movie.bigPoster}
        Detail={() => <Content movie={movie} />}
      />

      <DynamicVideoPlayer slug={movie.slug} videoSource={movie.videoUrl} />

      <div className='mt-12'>
        <SubHeading title='Similar' />
        <Gallery items={similarMovies} />
      </div>

      <div>rating</div>
    </Meta>
  );
};
