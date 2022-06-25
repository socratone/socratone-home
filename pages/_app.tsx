import '../styles/fonts.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        /> */}

      <title>{`Socratone's Homepage`}</title>
      <meta
        name="description"
        content="I have listed the things I use when I do some work"
      />
      {/* <meta name="twitter:creator" content="Viva Republica" />
        <meta name="twitter:site" content="@Toss_service" />
        <meta name="twitter:card" content="summary_large_image" /> */}
      <meta property="og:title" content="My Workbench" />
      <meta name="twitter:title" content="My Workbench" />
      <meta
        property="og:description"
        content="I have listed the things I use when I do some work"
      />
      <meta
        name="twitter:description"
        content="I have listed the things I use when I do some work"
      />

      {/* <meta
        property="og:image"
        content="http://nqa.tlabstudio.com/images/OG_banner.png"
      />
      <meta
        name="twitter:image"
        content="http://nqa.tlabstudio.com/images/OG_banner.png"
      /> */}

      {/* icon */}
      <link rel="icon" href="/favicon.ico" />
      {/* <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://static.toss.im/tds/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://static.toss.im/tds/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="48x48"
          href="https://static.toss.im/tds/favicon/favicon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="https://static.toss.im/tds/favicon/favicon-196x196.png"
        /> */}

      <link rel="apple-touch-icon" sizes="57x57" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="72x72" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="114x114" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="144x144" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.ico" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
