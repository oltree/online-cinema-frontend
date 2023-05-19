import cn from 'classnames';
import { FC } from 'react';

import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return <div className={cn(styles.sidebar, className)}>Sidebar</div>;
};

export default Sidebar;
