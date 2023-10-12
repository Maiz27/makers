import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/pageHeader/PageHeader';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import img from '/public/imgs/site/2.jpg';
import img2 from '/public/imgs/site/3.jpg';
import img3 from '/public/imgs/site/4.jpg';
import {
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';

const page = () => {
  return (
    <>
      <PageHeader index={0} />

      <section className='flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 xl:py-32'>
        <div className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'>
          <Heading text='About Us: Makers Engineering' Tag='h2' />
          <p>
            Step into the world of MAKERS Engineering Limited, where innovation
            illuminates our path. We weave a vibrant tapestry of expertise,
            crafting visionary projects across disciplines that sculpt the
            horizon of industries globally. Embrace a voyage marked by
            creativity and collaboration, as we stand resolute in transforming
            audacious concepts into concrete achievements. Our journey is a
            testament to engineering brilliance, inviting you to join hands with
            us and actualize the extraordinary. Together, let&apos;s engineer a
            future that echoes with the impact of innovation and the promise of
            progress. With every endeavor, we shape possibilities, leaving an
            indelible mark on the landscape of innovation.
          </p>
        </div>

        <div className='w-4/5 lg:w-1/3 grid place-items-center relative group'>
          <Image
            src={img}
            alt='Blueprint'
            className='w-full object-cover rounded-xl'
            priority={true}
          />
          <Image
            src={img2}
            alt='Makers Engineers'
            className='absolute -top-10 -right-4 lg:-right-10 2xl:-right-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
          />
          <Image
            src={img3}
            alt='Makers Engineers'
            className='absolute -bottom-10 -left-4 lg:-left-10 2xl:-left-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
          />
        </div>
      </section>

      <section className='flex flex-col items-center gap-8 md:gap-12 bg-accent/10 py-20'>
        <Heading Tag='h3' text='Core Values' />

        <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center'>
            <FaShieldAlt />
            <span>Integrity</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaLightbulb />
            <span>Innovation</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaTrophy />
            <span>Excellence</span>
          </div>
          <div className='flex flex-col items-center'>
            <FaHandshake />
            <span>Collaboration</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
