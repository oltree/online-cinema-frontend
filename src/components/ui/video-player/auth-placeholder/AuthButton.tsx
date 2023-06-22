import Link from 'next/link';
import { FC, memo } from 'react';

import { getMovieUrl } from '@/configs/url.config';

import styles from './AuthPlaceholder.module.scss';

interface AuthButtonProps {
  slug: string;
}

export const AuthButton: FC<AuthButtonProps> = memo(({ slug }) => (
  <Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
    <a className={styles.btn}>Sign in</a>
  </Link>
));
