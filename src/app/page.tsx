import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Projects from '@/components/homeComp/projects/Projects';

export default function Home() {
  return (
    <main className=''>
      <Hero />

      <About />

      <Services />

      <Projects />
      <div className='h-screen'></div>
    </main>
  );
}
