import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { GoogleAnalytics } from "nextjs-google-analytics";

import AppStyles from '../styles/App.module.css';

import '/styles/prismjs.css';
import '/styles/JetBrainsMonoNF.css';
import '/styles/markdown.css';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const mantineTheme: MantineThemeOverride = {
    colorScheme: colorScheme,
    fontFamily: 'Merriweather Sans, sans serif',
    fontFamilyMonospace: 'JetBrainsMono NF',
    headings: { fontFamily: 'Merriweather, serif' },
  };

  const headerLinks = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Projects',
      link: '/projects',
    },
    {
      label: 'Blog',
      link: '/blog',
    },
    {
      label: 'Resume',
      link: '/resume',
    },
  ];

  const footerLinks = [
    {
      link: '/',
      label: 'Home',
    },
    {
      link: '/projects',
      label: 'Projects',
    },
    {
      link: '/blog',
      label: 'Blog',
    },
    {
      link: '/resume',
      label: 'Resume',
    },
  ];

  return (
    <>
      <Head>
        <title>Brown's Website</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GoogleAnalytics />
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <div className={AppStyles.page}>
              <div className={AppStyles.app}>
                <Navbar links={headerLinks} />
                <div className={AppStyles.main}>
                  <Component {...pageProps} />
                </div>
                <Footer links={footerLinks} />
              </div>
            </div>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
