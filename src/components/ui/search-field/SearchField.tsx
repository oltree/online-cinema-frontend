import cn from 'classnames';
import { ChangeEvent, FC, memo } from 'react';

import styles from './SearchField.module.scss';

import { MaterialIcon } from '../material-icon';

interface SearchFieldProps {
  searchTerm: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const SearchField: FC<SearchFieldProps> = memo(
  ({ searchTerm, onSearch, className }) => (
    <div className={cn(styles.search, className)}>
      <MaterialIcon name='MdSearch' />
      <input placeholder='Search' value={searchTerm} onChange={onSearch} />
    </div>
  )
);
