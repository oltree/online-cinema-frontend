import Image from 'next/legacy/image';
import { FC, memo } from 'react';

import styles from './Banner.module.scss';

interface BannerProps {
  image: string;
  Detail?: FC | null;
}

export const Banner: FC<BannerProps> = memo(({ image, Detail }) => (
  <div className={styles.banner}>
    <Image
      src={image}
      alt='banner'
      layout='fill'
      draggable={false}
      className='image-like-bg object-top'
      unoptimized
      priority
    />
    {Detail && <Detail />}
  </div>
));
