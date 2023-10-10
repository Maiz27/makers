import Hero from '@/components/homeComp/hero/Hero';
import About from '@/components/homeComp/About';
import Services from '@/components/homeComp/services/Services';
import Projects from '@/components/homeComp/projects/Projects';
import Blog from '@/components/homeComp/Blog';
import FAQ from '@/components/homeComp/FAQ';
import { sanityClient } from '@/services/sanity/sanityClient';
import { getAllHeroImages } from '@/services/sanity/queries';

export const revalidate = 60; // revalidate every minute

const fetchHeroImages = async () => {
  const images = await sanityClient.fetch(getAllHeroImages);
  return images;
};

export default async function Home() {
  const heroImages = await fetchHeroImages();

  return (
    <>
      <Hero images={heroImages} />

      <About />

      <Services />

      <Projects />

      <Blog />

      <FAQ />
    </>
  );
}
