import Image from 'next/image';
import React from 'react';
import hero1 from '/public/imgs/hero/3.jpg';

const Hero = () => {
  return (
    <div className='h-[92vh] relative flex'>
      <div className='w-3/6 h-full'></div>
      <div className='w-[75%] h-full'>
        <Image
          src={hero1}
          alt=''
          className='h-full object-cover object-center'
        />
      </div>
      <div
        className='absolute inset-0 bg-base-100'
        style={{
          clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)',
        }}
      ></div>
    </div>
  );
};

export default Hero;
