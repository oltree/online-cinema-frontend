import cn from 'classnames';
import { FC, InputHTMLAttributes, memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './Field.module.scss';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
  placeholder?: string;
  error?: string | undefined;
}

export const Field: FC<FieldProps> = memo(
  ({ register, error, placeholder, className, ...rest }) => (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{placeholder}</label>
      <input {...register} {...rest} className={cn(styles.input, className)} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
);
