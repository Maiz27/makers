import Image from 'next/image';
import React from 'react';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <div className='h-[92vh] relative flex'>
      <div className='w-3/6 h-full'></div>
      <div className='w-[75%] h-full'>
        <ImageSlider />
      </div>
      <div
        className='absolute inset-0 bg-base-100'
        style={{
          clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)',
        }}
      >
        <div className='h-full w-5/12 flex flex-col justify-center'>
          <div className='z-20 ml-28 flex flex-col gap-8'>
            <h1 className='text-4xl leading-normal'>
              Redefining Possibilities in The Civil Engineering Industry
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate placeat repellat sequi consectetur beatae. Molestiae
              libero deleniti culpa minus distinctio quaerat quidem nesciunt,
              nisi non commodi ipsum, ea rerum debitis.
            </p>
            <div className='flex items-center gap-4'>
              <button className='btn normal-case btn-primary'>
                Explore Services
              </button>
              <button className='btn normal-case btn-secondary'>
                Previous Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
