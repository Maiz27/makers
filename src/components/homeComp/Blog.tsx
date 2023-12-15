import React from 'react';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import BlogCard from '../blogComp/BlogCard';
import { getStringDate } from '@/Constants';
import AnimateInView from '../animateInView/AnimateInView';
import { blog } from '@/types';

const Blog = ({ latestBlogs }: { latestBlogs: blog[] }) => {
  return (
    <section className='min-h-screen flex flex-col justify-center gap-60 lg:gap-20 py-20'>
      <AnimateInView
        threshold={0.5}
        delay={0.5}
        className='w-4/5 md:w-11/12 flex flex-col md:flex-row mx-auto justify-evenly items-center gap-8'
      >
        <div className='w-full md:w-1/2 max-w-lg'>
          <Heading
            Tag='h2'
            text='Our Insights: Exploring Engineering Trends and Innovations'
          />
        </div>

        <div className='w-full md:w-1/2 space-y-4'>
          <p>
            Discover the latest engineering trends and innovations through our
            insights. Short, insightful, and engaging, our articles offer a
            glimpse into the future of construction. Stay updated, and ahead of
            the curve with Makers Engineering Limited.
          </p>

          <CTA text='Explore Insights' page='/blog' />
        </div>
      </AnimateInView>

      <div className='grid place-items-center mx-auto gap-56 md:gap-8 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 w-4/5 md:w-11/12'>
        {latestBlogs.map(
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
                slug={slug}
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
      </div>
    </section>
  );
};

export default Blog;
