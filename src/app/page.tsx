import About from '@/components/about/About';
import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <main className=''>
      <Hero />

      <About />

      <div className='h-screen'></div>
    </main>
  );
}
