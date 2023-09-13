import React from 'react';
import ImageSlider from './ImageSlider';
import Stats from './Stats';
import CTA from '../CTA/CTA';

const Hero = () => {
  return (
    <div className='h-screen relative flex items-center'>
      <div className='w-11/12 md:w-4/5 lg:w-3/6 z-10 mx-auto text-base-100 lg:text-neutral'>
        <TextArea />
      </div>
      <div className='w-full absolute lg:static lg:w-[75%] h-full'>
        <ImageSlider />
        <div className='hidden z-10 lg:block lg:absolute bottom-[10%] left-1/2 -translate-x-1/5 xl:-translate-x-1/4'>
          <Stats />
        </div>
      </div>
      <div
        className='absolute inset-0 bg-base-100 hidden lg:block'
        style={{
          clipPath: 'polygon(0 0, 40% 0, 60% 100%, 0 100%)',
        }}
      ></div>
    </div>
  );
};

export default Hero;

const TextArea = () => {
  return (
    <section className='flex flex-col justify-center items-center lg:items-start z-10 gap-8 lg:ml-10 xl:ml-16'>
      <h1 className='text-3xl xl:text-4xl leading-normal'>
        Pioneering a New Era of Innovation and Excellence in Civil Engineering
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        placeat repellat sequi consectetur beatae. Molestiae libero deleniti
        culpa minus distinctio quaerat quidem nesciunt, nisi non commodi ipsum,
        ea rerum debitis.
      </p>
      <div className='flex items-center gap-4'>
        <CTA
          text='Explore Services'
          page='/services'
          className='hover:shadow-2xl hover:shadow-primary'
        />
        <CTA
          text='Previous Projects'
          page='/projects'
          bg='secondary'
          isOutline={true}
          className='hidden lg:flex'
        />
        <CTA
          text='Previous Projects'
          page='/projects'
          className='lg:hidden btn-outline btn-secondary'
        />
      </div>
    </section>
  );
};
