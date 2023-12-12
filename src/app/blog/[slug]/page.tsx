import React from 'react';
import { fetchSanityData, urlFor } from '@/services/sanity/sanityClient';
import { getPostBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';

export const revalidate = 60; // revalidate every minute

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = await fetchSanityData(getPostBySlug, { slug });
  const imgUrl = urlFor(post.mainImage).url();

  return {
    title: post.title,
    description: post.description,
    type: 'article',
    icons: {
      icon: imgUrl,
      shortcut: imgUrl,
      apple: imgUrl,
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: imgUrl,
      },
    },
  };
}

const page = async ({ params: { slug } }) => {
  const post = await fetchSanityData(getPostBySlug, { slug });
  const { body } = post;

  return (
    <article>
      <PageHeader blog={post} />

      <section className='w-4/5 lg:w-2/3 2xl:w-1/2 mx-auto mt-10 mb-20'>
        <BlogBody body={body} />
      </section>
    </article>
  );
};

export default page;
