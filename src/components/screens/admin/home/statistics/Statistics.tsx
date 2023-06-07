import { FC } from 'react';

import styles from './Statistics.module.scss';

import { PopularMovies, UserCount } from './components';

export const Statistics: FC = () => (
  <div className={styles.statistics}>
    <UserCount />
    <PopularMovies />
  </div>
);
