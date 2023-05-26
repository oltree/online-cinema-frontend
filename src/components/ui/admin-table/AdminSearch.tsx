import { ChangeEvent, FC } from 'react';

import { Button } from '@/components/ui/button';
import { SearchField } from '@/components/ui/search-field';

import styles from './AdminTable.module.scss';

interface AdminSearchProps {
  searchTerm: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: VoidFunction;
}

const AdminSearch: FC<AdminSearchProps> = ({
  searchTerm,
  onSearch,
  onClick,
}) => (
  <div className={styles.search}>
    <SearchField searchTerm={searchTerm} onSearch={onSearch} />
    {onClick && <Button onClick={onClick}>Create new</Button>}
  </div>
);

export default AdminSearch;
