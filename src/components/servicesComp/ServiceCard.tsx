'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import useWindowWidth from '@/hooks/useWindowWidth';
import AnimateInView from '../animateInView/AnimateInView';

export const ServiceCard = ({ position, index, title, desc, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: 'easeInOut',
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between group overflow-hidden p-8 shadow hover:shadow-lg transition-shadow rounded-xl md:w-3/5 ${
        index % 2 ? 'bg-black text-base-100' : 'bg-base-100'
      }`}
    >
      <Link href='/services'>
        <div className='absolute right-2 top-2 text-7xl opacity-20 group-hover:rotate-[20deg] transition-transform duration-300'>
          {Icon}
        </div>
        <h3 className='mb-8 text-3xl font-bold'>{title}</h3>
        <p>{desc}</p>
      </Link>
    </motion.div>
  );
};

export const ServiceCardAlt = ({ index, title, desc, Icon }) => {
  const width = useWindowWidth();
  const fn = () => {
    if (width >= 768 && width < 1280) {
      return Math.floor((index - 1) / 2) % 2 === 0;
    } else {
      return index % 2 === 0;
    }
  };
  return (
    <AnimateInView
      delay={++index * 0.2}
      className={`w-full h-full relative flex min-h-[250px] max-w-lg shrink-0 flex-col justify-between group overflow-hidden p-8 shadow transition-shadow rounded-xl ${
        fn() ? 'bg-black text-base-100' : 'bg-base-100'
      }`}
    >
      <div className='absolute right-2 top-2 text-7xl opacity-20 group-hover:rotate-[20deg] transition-transform duration-300'>
        {Icon}
      </div>
      <h3 className='mb-8 text-3xl font-bold'>{title}</h3>
      <p>{desc}</p>
    </AnimateInView>
  );
};
