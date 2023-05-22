import { FC, PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import Layout from '@/components/layout/Layout';

import { store } from '@/store/store';

import HeadProvider from './HeadProvider/HeadProvider';

const DEFAULT_DELAY_NOTICE = 3000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MainProvider: FC<PropsWithChildren> = ({ children }) => (
  <HeadProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReduxToastr
          closeOnToastrClick
          newestOnTop={false}
          position='bottom-right'
          preventDuplicates
          progressBar
          timeOut={DEFAULT_DELAY_NOTICE}
          transitionIn='fadeIn'
          transitionOut='fadeOut'
        />
        <Layout>{children}</Layout>
      </QueryClientProvider>
    </Provider>
  </HeadProvider>
);

export default MainProvider;
