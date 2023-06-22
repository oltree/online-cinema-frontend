import { FC, memo } from 'react';

import styles from './AuthPlaceholder.module.scss';

import { AuthButton } from './AuthButton';

interface AuthPlaceholderProps {
  slug: string;
}

export const AuthPlaceholder: FC<AuthPlaceholderProps> = memo(({ slug }) => (
  <div className={styles.placeholder}>
    <div>You must be logged in to start watching</div>
    <AuthButton slug={slug} />
  </div>
));
