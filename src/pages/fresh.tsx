import { GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui/catalog';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

interface FreshPageProps {
  movies: IMovie[];
}

const FreshPage: NextPage<FreshPageProps> = ({ movies }) => (
  <Catalog
    title='Fresh movies'
    description='New movies and series'
    movies={movies}
  />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await MovieService.getAll();

    return {
      props: {
        movies,
      },
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
