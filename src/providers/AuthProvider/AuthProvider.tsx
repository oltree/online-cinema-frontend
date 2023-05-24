import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { useDispatchedActions } from '@/hooks/useDispatchedActions';

import { ComponentRolesType } from '@/shared/types/roles.types';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<ComponentRolesType>> = ({
  Component: { isOnlyAdmin, isOnlyUser },
  children,
}) => {
  const { user } = useAuth();
  const { logout, checkAuth } = useDispatchedActions();
  const { pathname } = useRouter();

  useEffect(() => {
    const accessToken = Cookies.get('accessToken');

    if (accessToken) checkAuth();
  }, []);

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken');

    if (!refreshToken && user) logout();
  }, [pathname]);

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
      {children}
    </DynamicCheckRole>
  );
};

export default AuthProvider;
