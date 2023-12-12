'use client';
import React, { useState } from 'react';
import { ServiceCard } from '@/components/servicesComp/ServiceCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimateInView from '@/components/animateInView/AnimateInView';
import { slideLeft } from '@/Constants';

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
    <AnimateInView
      initial={slideLeft.initial}
      whileInView={slideLeft.whileInView}
      delay={1}
      className='overflow-hidden px-4 py-12'
    >
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
            <ServiceCard
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
    </AnimateInView>
  );
};

export default CollapseCards;
