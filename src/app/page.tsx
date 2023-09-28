import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/Services';

export default function Home() {
  return (
    <main className=''>
      <Hero />

      <About />

      <Services />
      <div className='h-screen'></div>
    </main>
  );
}
