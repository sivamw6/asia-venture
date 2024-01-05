import { Fragment, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script';
import { SSRProvider } from 'react-bootstrap';
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/layout'

 function App({ Component, pageProps }) {
  return (
  <SSRProvider>
    <Fragment>
      {/* GA TAGS */}
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} 
        strategy='afterInteractive'
      />
      <Script id="google-analytics-script" strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
      </Script>

      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>

  </SSRProvider>
  ) 
}

export default App;
