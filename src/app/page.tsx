import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Projects from '@/components/homeComp/projects/Projects';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <Services />

      <Projects />

      <Blog />

      <FAQ />
    </>
  );
}
