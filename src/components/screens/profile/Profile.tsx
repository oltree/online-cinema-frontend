import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Loader } from '@/components/ui/loader';

import styles from './Profile.module.scss';

import { AuthFields } from '../auth/components';

import { IProfileInput } from './profile.interface';
import { useProfile } from './useProfile';

export const Profile: FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<IProfileInput>({
    mode: 'onChange',
  });

  const { isLoading, onSubmit } = useProfile(setValue);

  return (
    <Meta title='Profile'>
      <div className={styles.wrapper}>
        <Heading title='Profile' className='mb-6' />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {isLoading ? (
            <Loader count={2} />
          ) : (
            <AuthFields registerInput={register} errors={errors} />
          )}

          <Button>Update</Button>
        </form>
      </div>
    </Meta>
  );
};
