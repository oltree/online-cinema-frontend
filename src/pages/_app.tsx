import type { AppProps } from 'next/app';

import { ComponentRolesType } from '@/shared/types/roles.types';

import '@/assets/styles/globals.scss';

import MainProvider from '@/providers/MainProvider';

type AppPropsType = AppProps & ComponentRolesType;

const App = ({ Component, pageProps }: AppPropsType) => (
  <MainProvider Component={Component}>
    <Component {...pageProps} />
  </MainProvider>
);

export default App;
