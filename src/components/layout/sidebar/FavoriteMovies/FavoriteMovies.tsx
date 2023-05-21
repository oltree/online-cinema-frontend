import { FC } from 'react';

import styles from './FavoriteMovies.module.scss';

const FavoriteMovies: FC = () => {
  return (
    <div>
      <p className={styles.notAuthTitle}>
        For viewing favorites please authorize!
      </p>
    </div>
  );
};

export default FavoriteMovies;
