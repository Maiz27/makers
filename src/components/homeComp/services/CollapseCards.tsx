'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

type props = {
  list: Array<{
    title: string;
    desc: string;
    Icon: React.JSX.Element;
  }>;
};

const CollapseCards = ({ list }: props) => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < list.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };
  return (
    <div className='overflow-hidden px-4 py-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-8 flex justify-between gap-4'>
          <div></div>
          <div className='flex gap-2'>
            <button className='btn btn-secondary' onClick={shiftLeft}>
              <FaChevronLeft />
            </button>
            <button className='btn btn-primary' onClick={shiftRight}>
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className='flex gap-2 md:gap-4 lg:gap-6'>
          {list.map(({ title, desc, Icon }, index) => (
            <Card
              title={title}
              desc={desc}
              Icon={Icon}
              key={index}
              position={position}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapseCards;

const Card = ({ position, index, title, desc, Icon }) => {
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
