import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Designs from '@/components/homeComp/designs/Designs';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';
import { getAllHeroImages, getLatestPosts } from '@/services/sanity/queries';
import { fetchSanityData } from '@/services/sanity/sanityClient';

export const revalidate = 60; // revalidate every minute

export const metadata = {
  title: 'Makers Engineering',
  image: '/imgs/logo/text-logo.png',
  description:
    "Discover a dynamic force in South Sudan's the engineering realm, MAKERS Engineering Limited.",
  icons: {
    icon: '/imgs/logo/icon.png',
    shortcut: '/imgs/logo/text-logo.png',
    apple: '/imgs/logo/text-logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/imgs/logo/apple-touch-icon.png',
    },
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
