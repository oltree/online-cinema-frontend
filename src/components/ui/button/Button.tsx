import cn from 'classnames';
import { ButtonHTMLAttributes, FC, memo } from 'react';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = memo(
  ({ children, className, ...rest }) => (
    <button
      {...rest}
      className={cn('btn-primary py-2 px-10 capitalize text-center', className)}
    >
      {children}
    </button>
  )
);
