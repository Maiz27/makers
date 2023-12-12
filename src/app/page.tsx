import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Designs from '@/components/homeComp/designs/Designs';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';
import { getAllHeroImages, getLatestPosts } from '@/services/sanity/queries';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = {
  title: pagesMetaData[0].title,
  description: pagesMetaData[0].description,
  icons: {
    icon: pagesMetaData[0].image,
    shortcut: pagesMetaData[0].image,
    apple: pagesMetaData[0].image,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[0].image,
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
  const [heroImages, latestBlogs] = await Promise.all([
    fetchSanityData(getAllHeroImages),
    fetchSanityData(getLatestPosts),
  ]);

  return (
    <div className='overflow-x-hidden'>
      <Hero images={heroImages} />

      <About />

      <Services />

      <Designs />

      <Blog latestBlogs={latestBlogs} />

      <FAQ />
    </div>
  );
}
