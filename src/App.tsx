import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';
import Hero from './components/sections/Hero';
import Problems from './components/sections/Problems';
import Services from './components/sections/Services';
import Reasons from './components/sections/Reasons';
import Process from './components/sections/Process';
import Cases from './components/sections/Cases';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import About from './components/sections/About';
import FinalCTA from './components/sections/FinalCTA';
import Privacy from './components/sections/Privacy';

export default function App() {
  return (
    <div className="min-h-screen pb-20 sm:pb-0">
      <Header />
      <main>
        <Hero />
        <Problems />
        <About />
        <Services />
        <Reasons />
        <Process />
        <Cases />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Privacy />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
