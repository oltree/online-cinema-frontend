import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui/catalog';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

import Error404 from './404';

interface FreshPageProps {
  movies: IMovie[];
}

const FreshPage: NextPage<FreshPageProps> = ({ movies }) =>
  movies ? (
    <Catalog
      title='Fresh movies'
      description='New movies and series'
      movies={movies}
    />
  ) : (
    <Error404 />
  );

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await MovieService.getAll();

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

export default FreshPage;
