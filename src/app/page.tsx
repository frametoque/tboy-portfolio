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

export default function Home() {
  return (
    <SmoothScroll>
      <DisableInteractions />
      <LoadingScreen />
      <ProgressScroll />
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
      <Script strategy="lazyOnload" src="/assets/js/plugins.js" />
      <Script strategy="lazyOnload" src="/assets/js/scripts.js" />
    </SmoothScroll>
  );
}
