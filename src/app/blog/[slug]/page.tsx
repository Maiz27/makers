import React from 'react';
import { sanityClient, urlFor } from '@/services/sanity/sanityClient';
import { getPostBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';

const fetchPost = async (slug: string) => {
  const posts = await sanityClient.fetch(getPostBySlug, { slug });
  return posts[0];
};

const page = async ({ params }) => {
  const post = await fetchPost(params.slug);
  const { title, mainImage, publishedAt, body, categories, author } = post;

  const imgUrl = urlFor(mainImage).url();
  const authorImg = urlFor(author.image).url();
  return (
    <article>
      <PageHeader bg={imgUrl} blog={post} heading='' />
    </article>
  );
};

export default page;
