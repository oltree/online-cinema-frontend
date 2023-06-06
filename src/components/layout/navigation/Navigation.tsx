import cn from 'classnames';
import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import { Logo } from './Logo';
import { GenresMenu } from './menu/genres';
import { generalMenu, mainMenu } from './menu/menu.data';

interface NavigationProps {
  className?: string;
}

const DynamicMenu = dynamic(() => import('./menu/Menu'), {
  ssr: false,
});

export const Navigation: FC<NavigationProps> = memo(({ className }) => (
  <div className={cn('py-layout pl-layout', className)}>
    <Logo />
    <DynamicMenu menu={mainMenu} />
    <GenresMenu />
    <DynamicMenu menu={generalMenu} />
  </div>
));
