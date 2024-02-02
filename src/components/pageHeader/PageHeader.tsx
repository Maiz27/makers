import React from 'react';
import Image from 'next/image';
import Heading from '../heading/Heading';
import BreadCrumbs from './BreadCrumbs';
import { FaUserPen } from 'react-icons/fa6';
import { MdDateRange, MdTimer } from 'react-icons/md';
import { calculateReadTime, getStringDate, headingList } from '@/Constants';
import { blog } from '@/types';
import { urlFor } from '@/services/sanity/sanityClient';

type props = {
  index?: number;
  blog?: blog;
};

const PageHeader = ({ index = 0, blog }: props) => {
  if (blog) {
    return <IsBlog blog={blog} />;
  }

  return (
    <section className='relative'>
      <div className='w-full h-[70dvh] xl:h-[60dvh] relative'>
        <Image
          src={headingList[index].bg}
          width={2400}
          height={2400}
          alt='hero image'
          loading='eager'
          className='w-full h-full object-cover object-center'
          priority={true}
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <div className='h-3/4 w-10/12 mt-2 flex flex-col justify-center text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Heading text={headingList[index].heading} Tag='h1' isCentered={true} />

        <div className='flex flex-col lg:justify-evenly gap-4 mt-4 lg:mt-10 text-sm xl:text-base lg:w-3/5 lg:mx-auto tracking-wider leading-5'>
          <p className='lg:text-center'>{headingList[index].text}</p>
        </div>
      </div>
      <BreadCrumbs />
    </section>
  );
};

export default PageHeader;

const IsBlog = ({ blog }: { blog: blog }) => {
  const imgUrl = urlFor(blog.mainImage).url();
  return (
    <section className='relative'>
      <div className='w-full h-[70dvh] xl:h-[60dvh] relative'>
        <Image
          src={imgUrl}
          width={2400}
          height={2400}
          alt='hero image'
          loading='eager'
          className='w-full h-full object-cover object-center'
          priority={true}
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <div className='h-3/4 w-10/12 mt-2 flex flex-col justify-center text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Heading text={blog.title} Tag='h1' isCentered={true} />

        <p className='text-sm lg:text-base md:text-center mt-4 lg:w-3/5 mx-auto'>
          {blog.description}
        </p>

        <div className='flex flex-col lg:justify-evenly gap-4 mt-4 lg:mt-10 text-xs xl:text-base lg:w-3/5 lg:mx-auto tracking-wider leading-5'>
          <>
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
          </>
        </div>
      </div>
      <BreadCrumbs />
    </section>
  );
};
