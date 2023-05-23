import { FC, memo } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { Field } from '@/components/ui/field';

import { emailRegex, passwordRegex } from '@/shared/regexes';
import { AuthType } from '@/shared/types/auth.types';

interface AuthFieldsProps {
  registerInput: UseFormRegister<AuthType>;
  errors: FieldErrors<AuthType>;
}

export const AuthFields: FC<AuthFieldsProps> = memo(
  ({ registerInput, errors }) => (
    <div className='mb-14'>
      <Field
        type='email'
        register={registerInput('email', {
          required: 'Email is required!',
          pattern: {
            value: emailRegex,
            message: 'Please enter a valid email address!',
          },
        })}
        error={errors.email?.message}
        placeholder='E-mail'
      />
      <Field
        type='password'
        register={registerInput('password', {
          required: 'Password is required!',
          pattern: {
            value: passwordRegex,
            message: 'Invalid password format!',
          },
        })}
        error={errors.password?.message}
        placeholder='Password'
      />
    </div>
  )
);
