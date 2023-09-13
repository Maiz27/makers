import React from 'react';
import Image from 'next/image';
import hero1 from '/public/imgs/hero/1.jpg';
import hero2 from '/public/imgs/hero/2.jpg';
import CTA from '../CTA/CTA';

const About = () => {
  return (
    <section className='min-h-screen bg-primary/5 flex flex-col md:flex-row justify-evenly items-center gap-16 md:gap-4 lg:gap-0 py-20 md:py-0'>
      <div className='w-11/12 md:w-1/2 lg:w-1/3 grid grid-cols-2 place-items-center'>
        <Image
          src={hero1}
          alt=''
          loading='lazy'
          className='aspect-square w-11/12 object-cover rounded-xl'
        />
        <Image
          src={hero2}
          alt=''
          loading='lazy'
          className='aspect-square w-10/12 object-cover rounded-xl'
        />
        <Image
          src={hero2}
          alt=''
          loading='lazy'
          className='aspect-square w-10/12 object-cover rounded-xl'
        />
        <Image
          src={hero1}
          alt=''
          loading='lazy'
          className='aspect-square w-11/12 object-cover rounded-xl'
        />
      </div>

      <div className='w-4/5 md:w-1/2 max-w-2xl flex flex-col gap-8'>
        <h2 className='text-3xl xl:text-4xl leading-normal relative before:content-[""] before:absolute before:-top-4 xl:before:-top-8 before:left-0 before:w-20 before:h-[5px] before:bg-primary before:rounded-xl'>
          Our Story: Engineering a Brighter Future
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          placeat repellat sequi consectetur beatae. Molestiae libero deleniti
          culpa minus distinctio quaerat quidem nesciunt, nisi non commodi
          ipsum, ea rerum debitis.
        </p>

        <div>
          <CTA text='Learn More' page='/about' />
        </div>
      </div>
    </section>
  );
};

export default About;
