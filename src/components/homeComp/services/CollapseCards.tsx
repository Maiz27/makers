'use client';
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
            <button
              className='h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700'
              onClick={shiftLeft}
            >
              <FaChevronLeft />
            </button>
            <button
              className='h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700'
              onClick={shiftRight}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className='flex gap-4'>
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
    <div
      //   animate={{ x: `${-translateAmt}%` }}
      //   transition={{
      //     ease: "easeInOut",
      //     duration: 0.35,
      //   }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? 'bg-black text-white' : ' bg-white'
      }`}
    >
      {Icon}
      <h3 className='mb-8 text-3xl font-bold'>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
