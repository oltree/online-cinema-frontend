import { FC, memo } from 'react';

import styles from './AuthPlaceholder.module.scss';

import { AuthButton } from '../../auth-button';

interface AuthPlaceholderProps {
  slug: string;
}

export const AuthPlaceholder: FC<AuthPlaceholderProps> = memo(({ slug }) => (
  <div className={styles.placeholder}>
    <p className={styles.title}>You must be logged in to start watching!</p>

    <AuthButton slug={slug} />
  </div>
));
