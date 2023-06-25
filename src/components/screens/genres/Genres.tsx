import { FC, memo } from 'react';

import { Meta } from '@/components/meta';
import { Description } from '@/components/ui/description';
import { Heading } from '@/components/ui/heading';

import styles from './Genres.module.scss';

import { Genre } from './Genre';
import { GenreType } from './genre.type';

interface GenresProps {
  genres: GenreType[];
}

export const Genres: FC<GenresProps> = memo(({ genres }) => (
  <Meta
    title='Genres'
    description='In this section you will find all genres on our site'
  >
    <Heading title='Genres' className={styles.heading} />
    <Description
      text='In this section you will find all genres on our site'
      className={styles.description}
    />

    <section className={styles.genres}>
      {genres?.map(genre => (
        <Genre key={genre._id} genre={genre} />
      ))}
    </section>
  </Meta>
));
