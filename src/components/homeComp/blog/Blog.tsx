import React from 'react';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';

const Blog = () => {
  return (
    <section className='mt-10 md:mt-0 min-h-screen flex flex-col justify-center py-10 xl:py-0'>
      <div className='w-4/5 md:w-11/12 flex flex-col md:flex-row mx-auto justify-center items-center gap-8'>
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
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2'></div>
    </section>
  );
};

export default Blog;
