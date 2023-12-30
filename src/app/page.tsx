import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Designs from '@/components/homeComp/designs/Designs';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = {
  title: pagesMetaData[0].title,
  description: pagesMetaData[0].description,
  icons: {
    icon: pagesMetaData[0].icon,
    shortcut: pagesMetaData[0].icon,
    apple: pagesMetaData[0].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[0].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[0].type,
    url: pagesMetaData[0].url,
    title: pagesMetaData[0].title,
    description: pagesMetaData[0].description,
    siteName: pagesMetaData[0].title,
    images: [
      {
        url: pagesMetaData[0].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[0].url,
    images: [
      {
        url: pagesMetaData[0].image,
      },
    ],
  },
};

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
