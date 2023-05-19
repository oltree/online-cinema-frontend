import cn from 'classnames';
import { FC } from 'react';

import styles from './Navigation.module.scss';

interface NavigationProps {
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ className }) => {
  return <div className={cn(styles.navigation, className)}>Navigation</div>;
};

export default Navigation;
