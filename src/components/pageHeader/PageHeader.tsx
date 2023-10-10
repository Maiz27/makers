import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Heading from '../heading/Heading';
import BreadCrumbs from './BreadCrumbs';
import { blog } from '@/types';
import { FaUserPen } from 'react-icons/fa6';
import { MdDateRange, MdTimer } from 'react-icons/md';
import { calculateReadTime, getStringDate } from '@/Constants';

type props = {
  bg: string | StaticImageData;
  heading: string;
  blog?: blog;
};

const PageHeader = ({ bg, heading, blog }: props) => {
  return (
    <section className='relative'>
      <div className='w-full h-[30rem] relative'>
        <Image
          src={bg}
          width={2400}
          height={2400}
          alt='hero image'
          loading='eager'
          className='w-full h-full object-cover object-center'
          priority={true}
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='h-3/4 w-10/12 mt-2 flex flex-col justify-center text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Heading
          text={blog ? blog.title : heading}
          Tag='h1'
          isCentered={true}
        />

        {blog && (
          <div className='flex flex-col lg:justify-evenly gap-4 mt-4 lg:mt-10 text-xs xl:text-base lg:w-3/5 lg:mx-auto'>
            <ul className='w-full flex flex-wrap lg:justify-evenly gap-2'>
              {blog.categories.map(({ title }) => {
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
            <div className='w-full flex flex-col lg:flex-row lg:justify-evenly gap-1 pl-2'>
              <span className='flex items-center gap-2'>
                <FaUserPen className='text-primary' />
                {blog.author.name}
              </span>
              <time className='flex items-center gap-2'>
                <MdDateRange className='text-primary' />{' '}
                {getStringDate(blog.publishedAt)}
              </time>
              <span className='flex items-center gap-2'>
                <MdTimer className='text-primary' />
                {calculateReadTime(blog.body)} mins read
              </span>
            </div>
          </div>
        )}
      </div>
      <BreadCrumbs />
    </section>
  );
};

export default PageHeader;
