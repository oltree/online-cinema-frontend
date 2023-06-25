import cn from 'classnames';
import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import { Search } from './Search';
import { PopularMovies } from './popular-movies';

interface SidebarProps {
  className?: string;
}

const DynamicFavoriteMovies = dynamic(
  () => import('./favorite-movies/FavoriteMovies'),
  { ssr: false }
);

export const Sidebar: FC<SidebarProps> = memo(({ className }) => (
  <div className={cn('p-layout', className)}>
    <Search />
    <PopularMovies />
    <DynamicFavoriteMovies />
  </div>
));
