import { FC, memo } from 'react';

import styles from './FavoriteMovies.module.scss';

export const FavoriteMovies: FC = memo(() => (
  <p className={styles.notAuthTitle}>For viewing favorites please authorize!</p>
));
