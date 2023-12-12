import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getAllPosts, getPostCategories } from '@/services/sanity/queries';
import { pagesMetaData } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = {
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
  const [blogs, categories] = await Promise.all([
    fetchSanityData(getAllPosts),
    fetchSanityData(getPostCategories),
  ]);

  return (
    <>
      <PageHeader index={3} />

      <BlogsGrid blogs={blogs} categories={categories} />
    </>
  );
};

export default page;
