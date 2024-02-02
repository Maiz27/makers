import { Metadata } from 'next';
import PageTransition from '@/components/animationWrappers/PageTransition';
import PageHeader from '@/components/pageHeader/PageHeader';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { pagesMetaData } from '@/Constants';
import { getProjects } from '@/services/sanity/queries';
import ProjectsSwapColumn from '@/components/DesignComp/ProjectsSwapColumn';

export const metadata: Metadata = {
  // metadataBase: new URL(baseURl),
  title: pagesMetaData[4].title,
  description: pagesMetaData[4].description,
  icons: {
    icon: pagesMetaData[4].icon,
    shortcut: pagesMetaData[4].icon,
    apple: pagesMetaData[4].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[4].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[4].type,
    url: pagesMetaData[4].url,
    title: pagesMetaData[4].title,
    description: pagesMetaData[4].description,
    siteName: pagesMetaData[4].title,
    images: [
      {
        url: pagesMetaData[4].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[4].url,
    images: [
      {
        url: pagesMetaData[4].image,
      },
    ],
  },
};

const page = async () => {
  const projects = await fetchSanityData(getProjects);

  return (
    <PageTransition>
      <PageHeader index={2} />

      <ProjectsSwapColumn projects={projects} />
    </PageTransition>
  );
};

export default page;
