import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC, memo } from 'react';

import { IGalleryItem } from '@/components/ui/gallery/Gallery.interface';

import styles from './Favorites.module.scss';

import { FavoriteButton } from '../movie/favorite-button/FavoriteButton';

interface IFavoriteItem extends Omit<IGalleryItem, 'content'> {
  title: string;
  _id: string;
}

interface FavoriteItemProps {
  item: IFavoriteItem;
}

export const FavoriteItem: FC<FavoriteItemProps> = memo(({ item }) => (
  <div className={styles.itemWrapper}>
    <FavoriteButton movieId={item._id} />
    <Link href={item.link} className={styles.item}>
      <Image
        alt={item.name}
        src={item.posterPath}
        layout='fill'
        draggable={false}
        priority
      />

      <p className={styles.title}>{item.title}</p>
    </Link>
  </div>
));
