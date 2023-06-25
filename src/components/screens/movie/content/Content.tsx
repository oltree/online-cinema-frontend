import { FC, memo } from 'react';

import { MaterialIcon } from '@/components/ui/material-icon';

import { IMovie } from '@/shared/interfaces/movie.interface';

import { getActorUrl, getGenreUrl } from '@/configs/url.config';

import styles from './Content.module.scss';

import { FavoriteButton } from '../favorite-button/FavoriteButton';

import { ContentList } from './content-list';

interface ContentProps {
  movie: IMovie;
}

export const Content: FC<ContentProps> = memo(({ movie }) => (
  <div className={styles.content}>
    <h1>{movie.title}</h1>

    <div className={styles.details}>
      <span>{movie.parameters.year} · </span>
      <span>{movie.parameters.country} · </span>
      <span>{movie.parameters.duration} min.</span>
    </div>
    <ContentList
      name='Genres'
      links={movie.genres.slice(0, 3).map(genre => ({
        link: getGenreUrl(genre.slug),
        title: genre.name,
        _id: genre._id,
      }))}
    />
    <ContentList
      name='Actors'
      links={movie.actors.slice(0, 3).map(actor => ({
        link: getActorUrl(actor.slug),
        title: actor.name,
        _id: actor._id,
      }))}
    />

    <div className={styles.rating}>
      <MaterialIcon name='MdStarRate' />
      <span>{movie.rating.toFixed(1)}</span>
    </div>

    <FavoriteButton movieId={movie._id} />
  </div>
));
