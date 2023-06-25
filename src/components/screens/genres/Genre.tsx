import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { getGenreUrl } from '@/configs/url.config';

import styles from './Genres.module.scss';

import { GenreType } from './genre.type';

interface GenreProps {
  genre: GenreType;
}

export const Genre: FC<GenreProps> = memo(({ genre }) => {
  return (
    <Link href={getGenreUrl(genre.slug)} className={styles.genre}>
      <Image
        src={genre.image}
        alt={genre.title}
        layout='fill'
        draggable={false}
      />

      <div className={styles.content}>
        <div className={styles.title}>{genre.title}</div>
      </div>

      <div className={`${styles.behind} ${styles.second}`}>
        <Image
          src={genre.image}
          alt={genre.title}
          layout='fill'
          draggable={false}
        />
      </div>

      <div className={`${styles.behind} ${styles.third}`}>
        <Image
          src={genre.image}
          alt={genre.title}
          layout='fill'
          draggable={false}
        />
      </div>
    </Link>
  );
});
