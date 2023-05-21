import cn from 'classnames';
import { FC } from 'react';

import FavoriteMovies from './FavoriteMovies/FavoriteMovies';
import PopularMovies from './PopularMovies/PopularMovies';
import Search from './Search/Search';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => (
  <div className={cn('p-layout', className)}>
    <Search />
    <PopularMovies />
    <FavoriteMovies />
  </div>
);

export default Sidebar;
