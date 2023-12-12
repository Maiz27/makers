import React from 'react';
import CTA from '../CTA/CTA';
import Image from 'next/image';
import { MdDateRange, MdTimer } from 'react-icons/md';
import { urlFor } from '@/services/sanity/sanityClient';
import { blog } from '@/types';
import { calculateReadTime } from '@/Constants';
import AnimateInView from '../animateInView/AnimateInView';

const BlogCard = ({
  index,
  slug,
  publishedAt,
  title,
  description: desc,
  categories,
  mainImage: img,
  author,
  body,
}: blog) => {
  const imgUrl = urlFor(img).url();

  return (
    <AnimateInView
      delay={++index * 0.2}
      className={`w-full h-full grow bg-accent/10 shadow-md relative flex flex-col lg:flex-row justify-center items-center rounded-3xl max-w-2xl ${
        index % 2 ? 'bg-black text-base-100' : 'bg-base-100'
      }`}
    >
      <div
        className={`-translate-y-2/4  lg:translate-y-0 lg:-translate-x-1/4 w-10/12 lg:w-80 h-60 md:h-72 bg-primary rounded-3xl overflow-hidden ${
          index % 2 ? 'shadow-base-100 shadow' : 'shadow'
        }`}
      >
        <Image
          src={imgUrl}
          width={1080}
          height={720}
          alt={title}
          loading='lazy'
          className='w-full h-full object-cover shadow-base-100'
        />
      </div>
      <div className='-mt-20 md:-mt-28 grow pb-10 lg:pb-0 lg:my-16 w-11/12 flex flex-col justify-evenly items-center lg:items-start gap-4'>
        <div className='w-11/12 flex justify-between items-center text-xs'>
          <time className='flex items-center gap-2'>
            <MdDateRange /> {publishedAt}
          </time>
          <span className='flex items-center gap-2'>
            <MdTimer />
            {calculateReadTime(body)} mins read
          </span>
        </div>
        <h3 className='font-semibold text-lg text-center'>{title}</h3>

        <p className='text-xs w-11/12 text-center lg:text-left'>{desc}</p>

        <ul className='flex flex-wrap justify-center items-center gap-2 px-2'>
          {categories.map(({ title }) => {
            return (
              <li
                key={title}
                className='badge badge-xs bg-base-200 text-neutral badge-outline py-2'
              >
                {title}
              </li>
            );
          })}
        </ul>

        <CTA text='Read More' page={`/blog/${slug.current}`} size='sm' />
      </div>
    </AnimateInView>
  );
};

export default BlogCard;
