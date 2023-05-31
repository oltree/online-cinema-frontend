import { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/Home';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/getGenresList';

import { getMovieUrl } from '@/configs/url.config';

interface HomePageProps {
  slides: ISlide[];
}

const HomePage: NextPage<HomePageProps> = ({ slides }) => (
  <Home slides={slides} />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await MovieService.getAll();

    const slides: ISlide[] = data.slice(0, 3).map(movie => ({
      _id: movie._id,
      link: getMovieUrl(movie.slug),
      bigPoster: movie.bigPoster,
      subTitle: getGenresList(movie.genres),
      title: movie.title,
    }));

    return {
      props: {
        slides,
      },
    };
  } catch (e) {
    return {
      props: {
        slides: [],
      },
    };
  }
};

export default HomePage;
