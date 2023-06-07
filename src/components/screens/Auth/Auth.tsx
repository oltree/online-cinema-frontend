import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';

import { useDispatchedActions } from '@/hooks/useDispatchedActions';

import { AuthModes } from '@/shared/enums/authModes.enum';
import { AuthModeType, AuthType } from '@/shared/types/auth.types';

import styles from './Auth.module.scss';

import { AuthButtons, AuthFields } from './components';
import { useAuthRedirect } from './useAuthRedirect';

export const Auth: FC = () => {
  useAuthRedirect();

  const [mode, setMode] = useState<AuthModeType>(AuthModes.Login);

  const {
    reset,
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthType>({
    mode: 'onChange',
  });

  const { register, login } = useDispatchedActions();

  const onSubmit = (data: AuthType) => {
    mode === AuthModes.Login ? login(data) : register(data);

    reset();
  };

  return (
    <Meta title='Auth'>
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Heading title='Auth' className='mb-6' />
          <AuthFields registerInput={registerInput} errors={errors} />
          <AuthButtons setMode={setMode} />
        </form>
      </section>
    </Meta>
  );
};
