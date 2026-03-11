import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the loader in this session
    const hasShownLoader = sessionStorage.getItem('hasShownLoader');

    if (hasShownLoader) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hasShownLoader', 'true');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>
      <div className="relative">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
