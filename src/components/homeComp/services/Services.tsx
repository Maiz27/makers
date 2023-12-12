import React from 'react';
import Heading from '../../heading/Heading';
import CollapseCards from './CollapseCards';
import { servicesList } from '@/Constants';
import AnimateInView from '@/components/animateInView/AnimateInView';

const Services = () => {
  return (
    <section className='mt-10 md:mt-0 min-h-screen flex flex-col justify-center py-10 xl:py-0'>
      <AnimateInView
        threshold={0.5}
        delay={0.5}
        className='w-4/5 md:w-11/12 flex flex-col md:flex-row mx-auto justify-center items-center gap-8'
      >
        <div className='w-full md:w-1/2 max-w-lg'>
          <Heading
            Tag='h2'
            text='Our Comprehensive Services: Engineering Solutions for Every Challenge'
          />
        </div>

        <div className='w-full md:w-1/2'>
          <p>
            Unveil the potential of your projects with MAKERS Engineering
            Limited, specialized construction, architecture, and interior design
            services. From visionary architectural concepts to thoughtfully
            crafted interiors, we transform spaces into living works of art.
            Let&apos;s collaborate to bring your visions to life, one
            exceptional detail at a time.
          </p>
        </div>
      </AnimateInView>

      <CollapseCards list={servicesList} />
    </section>
  );
};

export default Services;
