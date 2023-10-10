import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogCard from '@/components/blogComp/BlogCard';
import { sanityClient } from '@/services/sanity/sanityClient';
import { getAllPosts } from '@/services/sanity/queries';
import { getStringDate } from '@/Constants';

export const revalidate = 60; // revalidate every minute

const fetchPosts = async () => {
  const posts = await sanityClient.fetch(getAllPosts);
  return posts;
};

const page = async () => {
  const posts: any = await fetchPosts();

  return (
    <>
      <PageHeader index={3} />

      <section className='my-40 md:my-52 lg:my-20 grid place-items-center mx-auto gap-56 md:gap-8 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 w-4/5 md:w-11/12'>
        {posts.map(
          (
            {
              slug,
              title,
              author,
              publishedAt,
              description,
              mainImage,
              categories,
              body,
            },
            idx: number
          ) => {
            return (
              <BlogCard
                key={slug.current}
                index={idx}
                slug={slug.current}
                title={title}
                categories={categories}
                publishedAt={getStringDate(publishedAt)}
                description={description}
                mainImage={mainImage}
                author={author}
                body={body}
              />
            );
          }
        )}
      </section>
    </>
  );
};

export default page;
