import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/components/ui/admin-table/admin-table.type';

import { useDebounce } from '@/hooks/useDebounce';

import { DEBOUNCE_DELAY } from '@/shared/constants/delays';
import { IUser } from '@/shared/interfaces/user.interface';

import { UserService } from '@/services/user.service';

import { convertDateFromMongo } from '@/utils/date/convertDateFromMongo';

import { getAdminUrl } from '@/configs/url.config';

export const useUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, DEBOUNCE_DELAY);

  const queryData = useQuery(
    ['User list', debouncedSearch],
    () => UserService.getAllUsers(debouncedSearch),
    {
      select: data =>
        data.map(
          (userData: IUser): ITableItem => ({
            _id: userData._id,
            editUrl: getAdminUrl(`/user/edit/${userData._id}`),
            items: [userData.email, convertDateFromMongo(userData.createdAt)],
          })
        ),

      onError: (error: string) => {
        toastr.error(error, 'User list');
      },
    }
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { mutateAsync: deleteAsync } = useMutation(
    'Delete user',
    (userId: string) => UserService.delete(userId),
    {
      onSuccess: () => {
        toastr.success('Delete user', 'Delete user successfully');
        queryData.refetch();
      },
      onError: (error: string) => {
        toastr.error(error, 'Delete user');
      },
    }
  );

  return useMemo(
    () => ({ handleSearch, ...queryData, deleteAsync, searchTerm }),
    [queryData, deleteAsync, searchTerm]
  );
};
