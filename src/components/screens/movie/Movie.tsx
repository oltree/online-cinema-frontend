import dynamic from 'next/dynamic';
import { FC } from 'react';

import { Meta } from '@/components/meta';
import { Banner } from '@/components/ui/banner';
import { Gallery } from '@/components/ui/gallery';
import { IGalleryItem } from '@/components/ui/gallery/Gallery.interface';
import { SubHeading } from '@/components/ui/sub-heading';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { Content } from './content';
import { useUpdateCountMovieViews } from './useUpdateCountMovieViews';

export interface MovieProps {
  movie: IMovie;
  similarMovies: IGalleryItem[];
}

const DynamicVideoPlayer = dynamic(
  () => import('@/components/ui/video-player/VideoPlayer'),
  { ssr: false }
);

const DynamicRating = dynamic(() => import('./rating/Rating'), { ssr: false });

export const Movie: FC<MovieProps> = ({ movie, similarMovies }) => {
  useUpdateCountMovieViews(movie.slug);

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

      <DynamicRating slug={movie.slug} id={movie._id} />
    </Meta>
  );
};
