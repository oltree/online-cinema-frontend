import Link from 'next/link';
import { FC, memo } from 'react';

import { getMovieUrl } from '@/configs/url.config';

import styles from './AuthPlaceholder.module.scss';

interface AuthPlaceholderProps {
  slug: string;
}

export const AuthPlaceholder: FC<AuthPlaceholderProps> = memo(({ slug }) => (
  <div className={styles.placeholder}>
    <p className={styles.title}>You must be logged in to start watching!</p>

    <Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.link}>
      Sign in
    </Link>
  </div>
));
