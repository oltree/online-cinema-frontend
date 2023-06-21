import cn from 'classnames';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Gallery.module.scss';

import { IGalleryItem } from './Gallery.interface';

export interface GalleryItemProps {
  item: IGalleryItem;
  variant: 'horizontal' | 'vertical';
}

const GalleryItem: FC<GalleryItemProps> = ({ item, variant }) => {
  return (
    <Link
      href={item.link}
      className={cn(styles.item, {
        [styles.withText]: item.content,
        [styles.horizontal]: variant === 'horizontal',
        [styles.vertical]: variant === 'vertical',
      })}
    >
      <Image
        alt={item.name}
        src={item.posterPath}
        layout='fill'
        draggable={false}
        priority
      />
      {item.content && (
        <div className={styles.content}>
          <div className={styles.title}>{item.content.title}</div>
          {item.content.subTitle && (
            <div className={styles.subTitle}> {item.content.subTitle}</div>
          )}
        </div>
      )}
    </Link>
  );
};

export default GalleryItem;
