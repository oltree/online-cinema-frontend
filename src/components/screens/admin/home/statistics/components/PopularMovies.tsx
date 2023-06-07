import cn from 'classnames';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '@/components/ui/loader';
import { SubHeading } from '@/components/ui/sub-heading';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

import { getMovieUrl } from '@/configs/url.config';

import styles from '../Statistics.module.scss';

export const PopularMovies: FC = memo(() => {
  const { isLoading, data: movie } = useQuery(
    'Most polular movie in statistics',
    () => MovieService.getPopular(),
    {
      select: (data): IMovie => data[0],
    }
  );

  return (
    <div className={cn(styles.block, styles.popular)}>
      <SubHeading title='The most popular movie' />
      {isLoading ? (
        <Loader className='h-48' />
      ) : (
        movie && (
          <>
            <h3>{`Opened ${movie.countOpened} times`}</h3>
            <Link href={getMovieUrl(movie.slug)}>
              <Image
                width={285}
                height={176}
                src={movie.bigPoster}
                alt={movie.title}
                className={styles.image}
                unoptimized
              />
            </Link>
          </>
        )
      )}
    </div>
  );
});
