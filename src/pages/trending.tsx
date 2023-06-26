import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui/catalog';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

interface TrendingPageProps {
  movies: IMovie[];
}

const TrendingPage: NextPage<TrendingPageProps> = ({ movies }) => (
  <Catalog
    title='Trending movies'
    description='Trending movies'
    movies={movies}
  />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await MovieService.getPopular();

    return {
      props: {
        movies,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        movies: [],
        notFound: true,
      },
    };
  }
};

export default TrendingPage;
