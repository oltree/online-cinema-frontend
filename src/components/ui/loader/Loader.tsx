import cn from 'classnames';
import { FC, memo } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const Loader: FC<SkeletonProps> = memo(({ className, ...rest }) => (
  <Skeleton
    {...rest}
    baseColor='#1F2125'
    highlightColor='#292A2E'
    className={cn('rounded-lg', className)}
  />
));
