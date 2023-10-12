import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import { values } from '@/Constants';
import img from '/public/imgs/site/2.jpg';
import img2 from '/public/imgs/site/3.jpg';
import img3 from '/public/imgs/site/4.jpg';
import TripleImage from '@/components/tripleImage/TripleImage';
import { leftImage, rightImage } from '@/types';

const page = () => {
  const main = { img: img, alt: 'Makers Engineers', priority: true };
  const left: leftImage = {
    img: img2,
    alt: 'Makers Engineers',
    position: 'bottom',
  };
  const right: rightImage = {
    img: img3,
    alt: 'Makers Engineers',
    position: 'top',
  };
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

        <TripleImage main={main} left={left} right={right} />
      </section>

      <section className='flex flex-col justify-center items-center gap-10 md:gap-12 bg-accent/10 py-20'>
        <Heading Tag='h3' text='Our Values: Defining Who We Are' />

        <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-4 gap-10'>
          {values.map(({ title, icon }) => {
            return (
              <div key={title} className='flex flex-col items-center'>
                <span className='text-xl'>{icon}</span>
                <span>{title}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
