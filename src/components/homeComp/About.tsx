import React from 'react';
import Image from 'next/image';
import CTA from '../CTA/CTA';
import { aboutImages } from '@/Constants';
import Heading from '../heading/Heading';

const About = () => {
  return (
    <section className='min-h-screen bg-primary/5 flex flex-col md:flex-row justify-evenly items-center gap-16 md:gap-4 lg:gap-0 py-20 md:py-0'>
      <div className='w-11/12 md:w-1/2 lg:w-1/3 grid grid-cols-2 place-items-center'>
        {aboutImages.map((image, idx) => {
          return (
            <Image
              key={idx}
              src={image}
              alt=''
              loading='lazy'
              className={`aspect-square object-cover rounded-xl ${
                idx === 1 || idx === 2 ? 'w-11/12' : 'w-10/12'
              }`}
            />
          );
        })}
      </div>

      <div className='w-4/5 md:w-1/2 max-w-2xl flex flex-col gap-8'>
        <Heading text='Our Story: Engineering a Brighter Future' Tag='h2' />
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
