import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import { sanityClient } from '@/services/sanity/sanityClient';
import { getAllPosts, getPostCategories } from '@/services/sanity/queries';
import { blog, blogCategory } from '@/types';

export const revalidate = 60; // revalidate every minute

const fetchPosts = async () => {
  const posts: blog[] = await sanityClient.fetch(getAllPosts);
  return posts;
};

const fetchPostCategories = async () => {
  const categories: blogCategory[] = await sanityClient.fetch(
    getPostCategories
  );
  return categories;
};

const page = async () => {
  const [blogs, categories] = await Promise.all([
    fetchPosts(),
    fetchPostCategories(),
  ]);

  return (
    <>
      <PageHeader index={3} />

      <BlogsGrid blogs={blogs} categories={categories} />
    </>
  );
};

export default page;
