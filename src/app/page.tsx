import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Projects from '@/components/homeComp/projects/Projects';
import Blog from '@/components/homeComp/Blog';

export default function Home() {
  return (
    <main className=''>
      <Hero />

      <About />

      <Services />

      <Projects />

      <Blog />
      <div className='h-screen'></div>
    </main>
  );
}
