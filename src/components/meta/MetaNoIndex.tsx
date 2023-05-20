import Head from 'next/head';
import { FC } from 'react';

import { getTotalTitle } from '@/configs/seo.config';

interface MetaNoIndexProps {
  title?: string;
}

export const MetaNoIndex: FC<MetaNoIndexProps> = ({ title = 'Error' }) => (
  <Head>
    <title>{getTotalTitle(title)}</title>
    <meta name='robots' content='noindex, nofollow' />
  </Head>
);
