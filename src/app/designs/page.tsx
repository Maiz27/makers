import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';
import InteriorDesigns from '@/components/DesignComp/InteriorDesigns';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const metadata: Metadata = {
  title: pagesMetaData[4].title,
  description: pagesMetaData[4].description,
  icons: {
    icon: pagesMetaData[4].image,
    shortcut: pagesMetaData[4].image,
    apple: pagesMetaData[4].image,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[4].image,
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

const page = () => {
  return (
    <>
      <PageHeader index={2} />

      <ArchitectureDesigns />

      <InteriorDesigns />
    </>
  );
};

export default page;
