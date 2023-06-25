import Link from 'next/link';
import { FC, memo } from 'react';

import { getMovieUrl } from '@/configs/url.config';

import styles from './AuthButton.module.scss';

interface AuthButtonProps {
  slug: string;
}

export const AuthButton: FC<AuthButtonProps> = memo(({ slug }) => (
  <Link href={`/auth?redirect=${getMovieUrl(slug)}`} className={styles.link}>
    Sign in
  </Link>
));
