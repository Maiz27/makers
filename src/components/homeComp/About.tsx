import React from 'react';
import Image from 'next/image';
import CTA from '../CTA/CTA';
import Heading from '../heading/Heading';
import blueprint from '/public/imgs/blueprint.jpg';
import img from '/public/imgs/site/9.jpg';
import img2 from '/public/imgs/site/11.jpg';

const About = () => {
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 lg:py-0'>
      <div className='w-4/5 lg:w-1/3 grid place-items-center relative group'>
        <Image
          src={blueprint}
          alt='Blueprint'
          className='w-full object-cover rounded-xl'
        />
        <Image
          src={img}
          alt='Makers Engineers'
          className='absolute -top-10 -right-4 lg:-right-10 2xl:-right-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
        />
        <Image
          src={img2}
          alt='Makers Engineers'
          className='absolute -bottom-10 -left-4 lg:-left-10 2xl:-left-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
        />
      </div>

      <div className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'>
        <Heading text='Our Story: Engineering a Brighter Future' Tag='h2' />
        <p>
          Discover a dynamic force in the engineering realm, MAKERS Engineering
          Limited. With a track record spanning multiple technical domains,
          we&apos;ve been redefining possibilities in the Civil Engineering
          Industry since our inception in 2018. As a powerhouse committed to
          innovation, we&apos;ve embarked on groundbreaking ventures that
          resonate with our vision for a stronger South Sudan.
        </p>

        <div>
          <CTA text='Learn More' page='/about' />
        </div>
      </div>
    </section>
  );
};

export default About;
