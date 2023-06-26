import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Movie } from '@/components/screens/movie';
import { IGalleryItem } from '@/components/ui/gallery/Gallery.interface';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

import { getMovieUrl } from '@/configs/url.config';

import Error404 from '../404';

export interface MoviePageProps {
  movie: IMovie;
  similarMovies: IGalleryItem[];
}

const MoviePage: NextPage<MoviePageProps> = ({ movie, similarMovies }) =>
  movie ? <Movie movie={movie} similarMovies={similarMovies} /> : <Error404 />;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const movies = await MovieService.getAll();
    const paths = movies.map(movie => ({ params: { slug: movie.slug } }));

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
    const currentMovie = await MovieService.getBySlug(String(params?.slug));
    const dataSimilarMovies = await MovieService.getByGenre(
      currentMovie.genres.map(genre => genre._id)
    );

    const similarMovies: IGalleryItem[] = dataSimilarMovies
      .filter(movie => movie._id !== currentMovie._id)
      .slice(0, 7)
      .map(movie => ({
        name: movie.title,
        posterPath: movie.poster,
        link: getMovieUrl(movie.slug),
      }));

    return {
      props: {
        movie: currentMovie,
        similarMovies,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        similarMovies: [],
        notFound: true,
      },
    };
  }
};

export default MoviePage;
