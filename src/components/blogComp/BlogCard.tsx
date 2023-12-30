import Image from 'next/image';
import CTA from '../CTA/CTA';
import { urlFor } from '@/services/sanity/sanityClient';
import { MdDateRange } from 'react-icons/md';
import { FaUserPen } from 'react-icons/fa6';
import { blog } from '@/types';

import AnimateInView from '../animationWrappers/AnimateInView';

const BlogCard = ({
  index,
  slug,
  publishedAt,
  title,
  description: desc,
  categories,
  mainImage: img,
  author,
}: blog) => {
  const imgUrl = urlFor(img).url();

  return (
    <AnimateInView
      delay={++index * 0.2}
      className={`w-full h-full grow bg-accent/10 shadow-md relative flex flex-col justify-center items-center rounded-3xl max-w-2xl ${
        index % 2 ? 'bg-black text-base-100' : 'bg-base-100'
      }`}
    >
      <div
        className={`-translate-y-2/4  w-10/12 h-60 md:h-72 bg-primary rounded-3xl overflow-hidden ${
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
      <div className='-mt-20 md:-mt-28 grow pb-6 w-11/12 flex flex-col justify-evenly items-center gap-4'>
        <div className='w-11/12 flex justify-between items-center text-xs'>
          <time className='flex items-center gap-2'>
            <MdDateRange /> {publishedAt}
          </time>
          <span className='flex items-center gap-2'>
            <FaUserPen />
            {author.name}
          </span>
        </div>
        <h3 className='font-semibold text-lg text-center'>{title}</h3>

        <p className='text-xs w-11/12 text-center '>{desc}</p>

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

        <CTA text='Read More' page={`/blog/${slug.current}`} />
      </div>
    </AnimateInView>
  );
};

export default BlogCard;
