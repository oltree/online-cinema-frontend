import { FC } from 'react';

import styles from './Statistics.module.scss';

import PopularMovies from './components/PopularMovies';
import UserCount from './components/UserCount';

const Statistics: FC = () => (
  <div className={styles.statistics}>
    <UserCount />
    <PopularMovies />
  </div>
);

export default Statistics;
