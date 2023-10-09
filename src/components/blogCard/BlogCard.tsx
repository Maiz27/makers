import React from 'react';
import CTA from '../CTA/CTA';
import Image, { StaticImageData } from 'next/image';
import { MdDateRange, MdTimer } from 'react-icons/md';

type props = {
  index: number;
  slug: string;
  date: string;
  title: string;
  desc: string;
  img: string | StaticImageData;
  readTime: number;
};

const BlogCard = ({ index, slug, date, title, desc, img, readTime }: props) => {
  return (
    <div
      className={`w-full min-h-80 bg-accent/10 shadow-md relative flex justify-center items-center rounded-3xl max-w-2xl ${
        index % 2 ? 'bg-black text-base-100' : 'bg-base-100'
      }`}
    >
      <div
        className={`absolute lg:static -translate-y-full md:-translate-y-3/4 lg:translate-y-0 lg:-translate-x-1/4 w-10/12 lg:w-80 h-60 md:h-72 bg-primary rounded-3xl overflow-hidden ${
          index % 2 ? 'shadow-base-100 shadow' : 'shadow'
        }`}
      >
        <Image
          src={img}
          alt='title'
          loading='lazy'
          className='w-full h-full object-cover shadow-base-100'
        />
      </div>
      <div className='pt-32 md:pt-40 pb-10 lg:py-16 w-11/12 flex flex-col items-center lg:items-start gap-4'>
        <div className='w-11/12 flex justify-between items-center text-xs'>
          <time className='flex items-center gap-2'>
            <MdDateRange /> {date}
          </time>
          <span className='flex items-center gap-2'>
            <MdTimer />
            {readTime} mins read
          </span>
        </div>
        <h3 className='text-lg'>{title}</h3>

        <p className='text-xs w-11/12 text-center lg:text-left'>{desc}</p>

        <CTA text='Read More' page={`/blog/${slug}`} size='sm' />
      </div>
    </div>
  );
};

export default BlogCard;
