import Script from 'next/script';
import Header from './Header/Header';
import Meta from './Meta';
import Footer from './Footer/Footer';

function Layout({ children }) {
  const analytics = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  return (
    <section>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${analytics}`}
      />
      <Script strategy="lazyOnload">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${analytics}', {
        page_path: window.location.pathname,
      });
        `}
      </Script>
      <Meta />
      <Header />
      {children}
      <Footer />
    </section>
  );
}

export default Layout;
