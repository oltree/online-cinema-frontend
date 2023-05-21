import { ChangeEvent, FC, memo } from 'react';

import styles from './SearchField.module.scss';

import { MaterialIcon } from '../material-icon';

interface SearchFieldProps {
  searchTerm: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<SearchFieldProps> = memo(
  ({ searchTerm, onSearch }) => (
    <div className={styles.search}>
      <MaterialIcon name='MdSearch' />
      <input placeholder='Search' value={searchTerm} onChange={onSearch} />
    </div>
  )
);
