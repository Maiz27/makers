import React from 'react';
import ImageSlider from './ImageSlider';

const Hero = () => {
  return (
    <div className='h-[92vh] relative flex items-center'>
      <div className='w-11/12 md:w-4/5 lg:w-3/6 z-10 mx-auto'>
        <TextArea />
      </div>
      <div className='w-full absolute lg:static lg:w-[75%] h-full'>
        <ImageSlider />
      </div>
      <div
        className='absolute inset-0 bg-base-100 hidden lg:block'
        style={{
          clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)',
        }}
      >
        {/* <div className='ml-12 lg:ml-10 xl:ml-16 h-full w-5/12 flex flex-col justify-center'>
          <TextArea />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

const TextArea = () => {
  return (
    <div className='flex flex-col justify-center items-center lg:items-start z-10 gap-8 lg:ml-10 xl:ml-16'>
      <h1 className='text-3xl leading-normal'>
        Redefining Possibilities in The Civil Engineering Industry
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        placeat repellat sequi consectetur beatae. Molestiae libero deleniti
        culpa minus distinctio quaerat quidem nesciunt, nisi non commodi ipsum,
        ea rerum debitis.
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
  );
};
