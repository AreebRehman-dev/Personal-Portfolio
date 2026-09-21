import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Clients from '@/components/common/Clients';
import Header from '@/components/page-about/Header';
import Intro from '@/components/page-about/Intro';
import Numbers from '@/components/page-about/Numbers';
import Services from '@/components/page-about/Services';
import Script from 'next/script';

export const metadata = {
  title: 'About | Areeb Rehman',
  description:
    'How I work: full stack web development with AI built in, from React and Next.js interfaces to fine tuned models and voice agents.',
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Intro />
            <Numbers />
            <Services />
            <Clients />
            <Marq2 />
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js" />
      <Script strategy="beforeInteractive" src="/assets/js/TweenMax.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/charming.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/countdown.js" />
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js" />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imagesloaded.pkgd.min.js"
      />
      <Script src="/assets/js/scripts.js" />
    </body>
  );
}
