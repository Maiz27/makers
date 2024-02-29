import PageHeader from '@/components/pageHeader/PageHeader';
import BlogsGrid from '@/components/blogComp/BlogsGrid';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import {
  getAllPostsForSEO,
  getPostCategories,
} from '@/services/sanity/queries';
import { getMetadataByPageIndex } from '@/Constants';
import { Metadata } from 'next';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const revalidate = 60; // revalidate every minute

export const metadata: Metadata = getMetadataByPageIndex(6);

const page = async () => {
  const [blogs, categories] = await Promise.all([
    fetchSanityData(getAllPostsForSEO),
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
