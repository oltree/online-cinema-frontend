import { FC } from 'react';

import styles from './Gallery.module.scss';

import { IGalleryItem } from './Gallery.interface';
import GalleryItem from './GalleryItem';

interface GalleryProps {
  items: IGalleryItem[];
}

const Gallery: FC<GalleryProps> = ({ items }) => {
  return (
    <div className={styles.gallery}>
      {items.map(item => (
        <GalleryItem key={item.link} item={item} variant='vertical' />
      ))}
    </div>
  );
};

export default Gallery;
