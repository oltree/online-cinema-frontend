import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';

import { accentColor, bgColor } from '@/configs/constants';

import Favicons from './Favicons';

enum ProgressOptions {
  StartPosition = 0.3,
  StopDelayMs = 200,
  Height = 3,
}

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextNProgress
        color={accentColor}
        height={ProgressOptions.Height}
        startPosition={ProgressOptions.StartPosition}
        stopDelayMs={ProgressOptions.StopDelayMs}
      />
      <Head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1.0'
        />

        <Favicons />

        <meta name='theme-color' content={bgColor} />
        <meta name='msapplication-navbutton-color' content={bgColor} />
        <meta name='apple-mobile-web-app-status-bar-style' content={bgColor} />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
