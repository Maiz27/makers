import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getAllPosts, getPostCategories } from '@/services/sanity/queries';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = {
  title: pagesMetaData[6].title,
  description: pagesMetaData[6].description,
  icons: {
    icon: pagesMetaData[6].icon,
    shortcut: pagesMetaData[6].icon,
    apple: pagesMetaData[6].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[6].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[6].type,
    url: pagesMetaData[6].url,
    title: pagesMetaData[6].title,
    description: pagesMetaData[6].description,
    siteName: pagesMetaData[6].title,
    images: [
      {
        url: pagesMetaData[6].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[6].url,
    images: [
      {
        url: pagesMetaData[6].image,
      },
    ],
  },
};

const page = async () => {
  const [blogs, categories] = await Promise.all([
    fetchSanityData(getAllPosts),
    fetchSanityData(getPostCategories),
  ]);

  return (
    <PageTransition>
      <PageHeader index={4} />

      <BlogsGrid blogs={blogs} categories={categories} />
    </PageTransition>
  );
};

export default page;
