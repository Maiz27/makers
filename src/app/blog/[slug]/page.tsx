import React from 'react';
import { sanityClient, urlFor } from '@/services/sanity/sanityClient';
import { getPostBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';

const fetchPost = async (slug: string) => {
  const posts = await sanityClient.fetch(getPostBySlug, { slug });
  return posts[0];
};

const page = async ({ params }) => {
  const post = await fetchPost(params.slug);
  const { mainImage, body } = post;

  return (
    <article>
      <PageHeader blog={post} />

      <div className='w-4/5 lg:w-2/3 2xl:w-1/2 mx-auto mt-10 mb-20'>
        <BlogBody body={body} />
      </div>
    </article>
  );
};

export default page;
