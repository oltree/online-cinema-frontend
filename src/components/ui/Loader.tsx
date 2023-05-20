import cn from 'classnames';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader: FC<SkeletonProps> = ({ className, ...rest }) => (
  <Skeleton
    {...rest}
    baseColor='#1F2125'
    highlightColor='#292A2E'
    className={cn('rounded-lg', className)}
  />
);

export default Loader;
