import { useRouter } from 'next/router';
import { FC } from 'react';

import { MaterialIcon } from '@/components/ui/material-icon';

import styles from './AdminTable.module.scss';

interface AdminActionsProps {
  editUrl: string;
  onRemove: VoidFunction;
}

const AdminActions: FC<AdminActionsProps> = ({ editUrl, onRemove }) => {
  const { push } = useRouter();

  return (
    <div className={styles.actions}>
      <button onClick={() => push(editUrl)}>
        <MaterialIcon name='MdEdit' />
      </button>
      <button onClick={onRemove}>
        <MaterialIcon name='MdClose' />
      </button>
    </div>
  );
};

export default AdminActions;
