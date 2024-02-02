import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';
import InteriorDesigns from '@/components/DesignComp/InteriorDesigns';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getArchDesigns, getInterDesigns } from '@/services/sanity/queries';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const metadata: Metadata = {
  // metadataBase: new URL(baseURl),
  title: pagesMetaData[5].title,
  description: pagesMetaData[5].description,
  icons: {
    icon: pagesMetaData[5].icon,
    shortcut: pagesMetaData[5].icon,
    apple: pagesMetaData[5].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[5].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[5].type,
    url: pagesMetaData[5].url,
    title: pagesMetaData[5].title,
    description: pagesMetaData[5].description,
    siteName: pagesMetaData[5].title,
    images: [
      {
        url: pagesMetaData[5].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[5].url,
    images: [
      {
        url: pagesMetaData[5].image,
      },
    ],
  },
};

const page = async () => {
  const [archDesigns, interDesigns] = await Promise.all([
    fetchSanityData(getArchDesigns),
    fetchSanityData(getInterDesigns),
  ]);

  return (
    <PageTransition>
      <PageHeader index={3} />

      <ArchitectureDesigns designs={archDesigns} />

      <InteriorDesigns designs={interDesigns} />
    </PageTransition>
  );
};

export default page;
