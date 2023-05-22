import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { Routes } from '@/shared/enums/routes.enum';

export const useAuthRedirect = () => {
  const { user } = useAuth();

  const { query, push } = useRouter();

  const redirect = String(query.redirect) || Routes.Home;

  useEffect(() => {
    if (user) push(redirect);
  }, [user, redirect, push]);
};
