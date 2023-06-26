import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Catalog } from '@/components/ui/catalog';

import { IActor } from '@/shared/interfaces/actor.interface';
import { IMovie } from '@/shared/interfaces/movie.interface';

import { ActorService } from '@/services/actor.service';
import { MovieService } from '@/services/movie.service';

import Error404 from '../404';

interface ActorPageProps {
  actor: IActor;
  movies: IMovie[];
}

const ActorPage: NextPage<ActorPageProps> = ({ actor, movies }) =>
  actor ? <Catalog title={actor.name} movies={movies} /> : <Error404 />;

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const actors = await ActorService.getAll();
    const paths = actors.map(actor => ({ params: { slug: actor.slug } }));

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
    const actor = await ActorService.getBySlug(String(params?.slug));
    const movies = await MovieService.getByActor(actor._id);

    return {
      props: {
        actor,
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

export default ActorPage;
