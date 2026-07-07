import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';
import Hero from './components/sections/Hero';
import Problems from './components/sections/Problems';
import Solution from './components/sections/Solution';
import Services from './components/sections/Services';
import BeforeAfter from './components/sections/BeforeAfter';
import Reasons from './components/sections/Reasons';
import Cases from './components/sections/Cases';
import Flow from './components/sections/Flow';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';
import Company from './components/sections/Company';

export default function App() {
  return (
    // pb はスマホの下部固定CTAぶんの逃げ。overflow-x-clip は横溢ガード
    <div className="min-h-screen overflow-x-clip pb-[72px] md:pb-0">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Services />
        <BeforeAfter />
        <Reasons />
        <Cases />
        <Flow />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Company />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
