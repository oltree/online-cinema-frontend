import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import { Layout } from '@/components/layout';

import { DEFAULT_DELAY } from '@/shared/constants/delays';
import { ComponentRolesType } from '@/shared/types/roles.types';

import { store } from '@/store/store';

import AuthProvider from './AuthProvider/AuthProvider';
import HeadProvider from './HeadProvider/HeadProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<PropsWithChildren<ComponentRolesType>> = ({
  children,
  Component,
}) => (
  <HeadProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReduxToastr
          closeOnToastrClick
          newestOnTop={false}
          position='bottom-right'
          preventDuplicates
          progressBar
          timeOut={DEFAULT_DELAY}
          transitionIn='fadeIn'
          transitionOut='fadeOut'
        />
        <AuthProvider Component={Component}>
          <Layout>{children}</Layout>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </HeadProvider>
);

export default MainProvider;
