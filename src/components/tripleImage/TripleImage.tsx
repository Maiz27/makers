import React from 'react';
import Image from 'next/image';
import { tripleImageProps } from '@/types';

const TripleImage = ({
  main,
  right = { img: '', alt: '', position: 'top' },
  left = { img: '', alt: '', position: 'bottom' },
}: tripleImageProps) => {
  return (
    <div className='w-4/5 lg:w-1/3 grid place-items-center relative group'>
      <Image
        src={main.img}
        alt={main.alt}
        className='w-full object-cover rounded-xl'
        priority={main.priority}
      />
      <Image
        src={right.img}
        alt={right.alt}
        className={`absolute -${right.position}-10 -right-4 lg:-right-10 2xl:-right-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl`}
      />
      <Image
        src={left.img}
        alt={left.alt}
        className={`absolute -${left.position}-10 -left-4 lg:-left-10 2xl:-left-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl`}
      />
    </div>
  );
};

export default TripleImage;
