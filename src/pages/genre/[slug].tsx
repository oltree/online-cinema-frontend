import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui/catalog';

import { IGenre } from '@/shared/interfaces/genre.interface';
import { IMovie } from '@/shared/interfaces/movie.interface';

import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';

import Error404 from '../404';

interface GenrePageProps {
  genre: IGenre | undefined;
  movies: IMovie[];
}

const GenrePage: NextPage<GenrePageProps> = ({ genre, movies }) =>
  genre ? (
    <Catalog
      title={genre.name}
      description={genre.description}
      movies={movies}
    />
  ) : (
    <Error404 />
  );

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const genres = await GenreService.getAll();
    const paths = genres.map(genre => ({ params: { slug: genre.slug } }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (e) {
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const genre = await GenreService.getBySlug(String(params?.slug));
    const movies = await MovieService.getByGenre([genre._id]);

    return {
      props: {
        genre,
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

export default GenrePage;
