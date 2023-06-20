import { error } from 'console';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
  const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
    onSuccess: data => {
      setValue('email', data.email);
    },
    onError: (error: string) => {
      toastr.error(error, 'Get profile');
    },
  });

  const { mutateAsync } = useMutation(
    'update profile',
    (data: IProfileInput) => UserService.updateProfile(data),
    {
      onSuccess: () => {
        toastr.success('Update profile', 'update was successful');
      },
      onError: (error: string) => {
        toastr.error(error, 'Update progile');
      },
    }
  );

  const onSubmit = async (data: IProfileInput) => await mutateAsync(data);

  return { isLoading, onSubmit };
};
