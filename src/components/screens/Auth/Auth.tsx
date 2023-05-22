import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Meta } from '@/components/meta';
import { Heading } from '@/components/ui/heading';

import { AuthModes } from '@/shared/enums/authModes.enum';
import { AuthModeType } from '@/shared/types/authMode.type';

import styles from './Auth.module.scss';

import { AuthFormType } from './auth.type';
import { AuthButtons, AuthFields } from './components';
import { useAuthRedirect } from './useAuthRedirect';

const Auth: FC = () => {
  useAuthRedirect();

  const [mode, setMode] = useState<AuthModeType>(AuthModes.Login);

  const {
    reset,
    register: registerInput,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormType>({
    mode: 'onChange',
  });

  const handleRegister = (data: AuthFormType) => {};
  const handleLogin = (data: AuthFormType) => {};

  const onSubmit = (data: AuthFormType) => {
    mode === AuthModes.Login ? handleLogin(data) : handleRegister(data);

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

export default Auth;
