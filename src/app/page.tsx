import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Designs from '@/components/homeComp/designs/Designs';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';
import { getMetadataByPageIndex } from '@/Constants';
import { Metadata } from 'next';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = getMetadataByPageIndex(0);

export default async function Home() {
  return (
    <PageTransition classNames='overflow-x-hidden'>
      <Hero />

      <About />

      <Services />

      <Designs />

      <Blog />

      <FAQ />
    </PageTransition>
  );
}
