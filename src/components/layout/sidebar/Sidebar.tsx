import cn from 'classnames';
import { FC } from 'react';

import Search from './Search/Search';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => (
  <div className={cn('p-layout', className)}>
    <Search />
  </div>
);

export default Sidebar;
