import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import { getObjectKeys } from '@/utils/objects/getObjectKeys';

import { getAdminUrl } from '@/configs/url.config';

import { IUserEditInput } from './user-edit.interface';

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
  const { push, query } = useRouter();

  const userId = String(query.id);

  const { isLoading } = useQuery(
    ['User', userId],
    () => UserService.getUser(userId),
    {
      onSuccess: data => {
        setValue('email', data.email);
        setValue('isAdmin', data.isAdmin);
      },

      onError: (error: string) => {
        toastr.error(error, 'Get user');
      },

      enabled: !!query.id,
    }
  );

  const { mutateAsync } = useMutation(
    'Update user',
    (data: IUserEditInput) => UserService.update(userId, data),
    {
      onSuccess: () => {
        toastr.success('Update user', 'Update user successful');
        push(getAdminUrl('users'));
      },

      onError: (error: string) => {
        toastr.error(error, 'Update user');
      },
    }
  );

  const onSubmit = async (data: IUserEditInput) => await mutateAsync(data);

  return { onSubmit, isLoading };
};
