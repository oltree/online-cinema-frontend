import cn from 'classnames';
import { FC, memo } from 'react';
import { useQuery } from 'react-query';

import { Loader } from '@/components/ui/loader';

import { AdminService } from '@/services/admin.service';

import styles from '../Statistics.module.scss';

export const UserCount: FC = memo(() => {
  const { isLoading, data: userCount } = useQuery('User count', () =>
    AdminService.getUserCount()
  );

  return (
    <div className={cn(styles.block, styles.userCount)}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.number}>{userCount}</div>
      )}
      <p className={styles.description}>users</p>
    </div>
  );
});
