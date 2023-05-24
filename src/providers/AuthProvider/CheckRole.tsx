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

  const isAdmin = user?.isAdmin;
  const isUser = user && !user.isAdmin;

  if (isAdmin || (isUser && isOnlyUser)) {
    return <>{children}</>;
  }

  const redirectToPath = isOnlyAdmin ? Routes.NotFound : Routes.Auth;

  if (pathname !== redirectToPath) {
    replace(redirectToPath);
  }

  return null;
};

export default CheckRole;
