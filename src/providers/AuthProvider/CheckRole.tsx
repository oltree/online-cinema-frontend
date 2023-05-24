import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { Routes } from '@/shared/enums/routes.enum';
import { ComponentRolesType } from '@/shared/types/roles.types';

const CheckRole: FC<PropsWithChildren<ComponentRolesType>> = ({
  Component: { isOnlyAdmin, isOnlyUser },
  children,
}) => {
  const { user } = useAuth();
  const { pathname, replace } = useRouter();

  const Children = () => <>{children}</>;

  const isUser = user && !user.isAdmin;

  if (user?.isAdmin || (isOnlyAdmin && isUser)) return <Children />;

  if (isOnlyAdmin && pathname !== Routes.NotFound) {
    replace(Routes.NotFound);

    return null;
  }

  if (isOnlyUser && pathname !== Routes.Auth) {
    replace(Routes.Auth);

    return null;
  }

  return null;
};

export default CheckRole;
