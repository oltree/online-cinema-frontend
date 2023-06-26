import { GetStaticProps, NextPage } from 'next';

import { Genres } from '@/components/screens/genres';
import { GenreType } from '@/components/screens/genres/genre.type';

import { GenreService } from '@/services/genre.service';

interface GenresPageProps {
  genres: GenreType[];
}

const GenresPage: NextPage<GenresPageProps> = ({ genres }) => (
  <Genres genres={genres} />
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const genres = await GenreService.getCollectionGenres();

    return {
      props: { genres },
      revalidate: 60,
    };
  } catch (e) {
    return {
      props: {
        genres: [],
      },
    };
  }
};

export default GenresPage;
