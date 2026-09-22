import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Services from '@/components/home-personal/Services';
import Portfolio from '@/components/home-personal/Portfolio';
import SmoothScroll from '@/components/common/SmoothScroll';
import DisableInteractions from '@/components/common/DisableInteractions';


export const metadata = {
  title: 'Tharul Bandara | Photographer | Graphics Designer | Editor',
  description: 'Tharul Bandara - Professional Photographer, Graphics Designer, and Editor. Co-Founder of Frametoque Digital Media.',
  keywords: 'Tharul Bandara, Photographer, Graphics Designer, Editor, Frametoque Digital Media, UI/UX Designer',
  icons: {
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <body className="home-personal">
      <SmoothScroll>
        <DisableInteractions />
        <LoadingScreen />
        <ProgressScroll />
        {/* Lines component removed to clear vertical lines from the background */}
        <Navbar />
        <main className="main-bg o-hidden">
          <Header />
          <Marq />
          <About />
          <Portfolio />
          <Services />
          <Marq2 />
        </main>
        <Footer />
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />

        <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/TweenMax.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/charming.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/countdown.js"
        ></Script>

        <Script
          strategy="beforeInteractive"
          src="/assets/js/gsap.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/splitting.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/isotope.pkgd.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
        ></Script>

        {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

        <Script src="/assets/js/scripts.js"></Script>
      </SmoothScroll>
    </body>
  );
}
