import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { AdminNavigation } from '@/components/ui/admin-navigation';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';

import { AuthFields } from '../../auth/components';

import { useUserEdit } from './useUserEdit';
import { IUserEditInput } from './user-edit.interface';

export const UserEdit: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    control,
  } = useForm<IUserEditInput>({ mode: 'onChange' });

  const { isLoading, onSubmit } = useUserEdit(setValue);

  return (
    <Meta title='Edit user'>
      <AdminNavigation />
      <Heading title='Edit user' />
      <form onSubmit={handleSubmit(onSubmit)}>
        {isLoading ? (
          <Loader count={3} />
        ) : (
          <>
            <AuthFields registerInput={register} errors={errors} />

            <Controller
              control={control}
              name='isAdmin'
              render={({ field }) => (
                <button
                  onClick={e => {
                    e.preventDefault();
                    field.onChange(!field.value);
                  }}
                  className='text-link block mb-7'
                >
                  {field.value ? 'Make it regular user' : 'Make it admin'}
                </button>
              )}
            />

            <Button>Update</Button>
          </>
        )}
      </form>
    </Meta>
  );
};
