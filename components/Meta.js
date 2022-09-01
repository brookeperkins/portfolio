import Head from 'next/head';
import Script from 'next/script';
import * as ga from '../lib/analytics';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Meta = ({ title, keywords, description }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
  return (
    <div>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta property='og:description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <meta property='og:title' content='Brooke Perkins Dot Com' key='title' />
      <meta property='og:url' content='brookeperkins.com' />
      <meta property='og:type' content='website' />
      <meta 
      property='og:image'
      content={'social.png'}
      />
    </Head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
        `}
      </Script>
    </div>
  )
}

Meta.defaultProps = {
  title: 'Brooke Perkins',
  keywords: 'brooke perkins, portland, software engineer, developer, designer',
  description: 'The personal portfolio site of Brooke Perkins',
}

export default Meta;