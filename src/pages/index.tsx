import { GetStaticProps, NextPage } from 'next';

import { Home } from '@/components/screens/home';
import { HomePageProps } from '@/components/screens/home/home.interface';
import { IGalleryItem } from '@/components/ui/gallery/Gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/genres/getGenresList';

import { getActorUrl, getMovieUrl } from '@/configs/url.config';

const HomePage: NextPage<HomePageProps> = ({
  slides,
  trendingMovies,
  actors,
}) => <Home slides={slides} trendingMovies={trendingMovies} actors={actors} />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dataMovies = await MovieService.getAll();

    const slides: ISlide[] = dataMovies.slice(0, 3).map(movie => ({
      _id: movie._id,
      link: getMovieUrl(movie.slug),
      bigPoster: movie.bigPoster,
      subTitle: getGenresList(movie.genres),
      title: movie.title,
    }));

    const dataTrendingMovies = await MovieService.getPopular();

    const trendingMovies: IGalleryItem[] = dataTrendingMovies
      .slice(0, 7)
      .map(movie => ({
        name: movie.title,
        posterPath: movie.poster,
        link: getMovieUrl(movie.slug),
      }));

    const dataActors = await ActorService.getAll();

    const actors: IGalleryItem[] = dataActors.slice(0, 7).map(actor => ({
      name: actor.name,
      posterPath: actor.photo,
      link: getActorUrl(actor.slug),
      content: {
        title: actor.name,
        subTitle: `+${actor.countMovies} movies`,
      },
    }));

    return {
      props: {
        slides,
        trendingMovies,
        actors,
      },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        slides: [],
        trendingMovies: [],
        actors: [],
      },
    };
  }
};

export default HomePage;
