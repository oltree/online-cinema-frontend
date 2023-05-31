import { FC, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './SlugField.module.scss';

import { Field } from '../field';

interface SlugFieldProps {
  register: UseFormRegisterReturn<string>;
  generate: VoidFunction;
  placeholder?: string;
  error?: string | undefined;
}

export const SlugField: FC<SlugFieldProps> = memo(
  ({ register, generate, placeholder, error }) => (
    <div className='relative'>
      <Field register={register} placeholder={placeholder} error={error} />
      <p className={styles.badge} onClick={generate}>
        generate
      </p>
    </div>
  )
);
