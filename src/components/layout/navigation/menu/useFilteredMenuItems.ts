import { useMemo } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { IMenu } from './menu.types';

export const useFilteredMenuItems = (menu: IMenu) => {
  const { user } = useAuth();

  const { title, items } = menu;

  if (title === 'General') {
    const filteredItems = items.filter(
      ({ isAuth, isAdmin }) => isAuth === !!user && (!isAdmin || user?.isAdmin)
    );

    return { title, items: filteredItems };
  }

  return useMemo(() => ({ title, items }), [title, items]);
};
