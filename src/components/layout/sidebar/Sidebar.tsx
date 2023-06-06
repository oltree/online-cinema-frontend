import cn from 'classnames';
import { FC, memo } from 'react';

import { Search } from './Search';
import { FavoriteMovies } from './favorite-movies';
import { PopularMovies } from './popular-movies';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => (
  <div className={cn('p-layout', className)}>
    <Search />
    <PopularMovies />
    <FavoriteMovies />
  </div>
));
