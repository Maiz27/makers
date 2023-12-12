import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getAllPosts, getPostCategories } from '@/services/sanity/queries';

export const revalidate = 60; // revalidate every minute

export const metadata = {
  title: 'Makers Engineering - Our Blogs',
  image: '/imgs/wallpapers/library.jpg',
  description:
    'Discover the latest engineering trends and innovations through our insights. Short, insightful, and engaging, our articles offer a glimpse into the future of construction.',
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
