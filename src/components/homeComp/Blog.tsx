import React from 'react';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import BlogCard from '../blogCard/BlogCard';
import img from '/public/imgs/site/9.jpg';
import img2 from '/public/imgs/site/11.jpg';

const list = [
  {
    slug: 'dummy-blog-slug-1',
    date: '26 December 2019',
    title: 'Dummy Blog title',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vitae praesentium veritatis, facilis quibusdam similique blanditiis sit velit molestias suscipit cum eius? Molestiae esse unde deserunt veritatis non dignissimos consequuntur.',
    img: img,
    readTime: 3,
  },
  {
    slug: 'dummy-blog-slug-2',
    date: '26 December 2019',
    title: 'Dummy Blog title',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vitae praesentium veritatis, facilis quibusdam similique blanditiis sit velit molestias suscipit cum eius? Molestiae esse unde deserunt veritatis non dignissimos consequuntur.',
    img: img2,
    readTime: 3,
  },
];

const Blog = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center gap-60 lg:gap-20 py-20'>
      <div className='w-4/5 md:w-11/12 flex flex-col md:flex-row mx-auto justify-evenly items-center gap-8'>
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

      <div className='grid place-items-center mx-auto gap-56 md:gap-8 lg:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 w-4/5 md:w-11/12'>
        {list.map(({ slug, title, date, desc, img, readTime }, idx) => {
          return (
            <BlogCard
              key={slug}
              index={idx}
              slug={slug}
              title={title}
              date={date}
              readTime={readTime}
              desc={desc}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
