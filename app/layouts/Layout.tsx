import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';

import Header from '../components/Header';

type LayoutProps = {
  children: ReactElement | ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Группа Т1-20' }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#1976d2" />
        <link rel="icon" type="image/svg" href="/logo.svg" />
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
