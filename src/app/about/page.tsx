import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import TripleImage from '@/components/tripleImage/TripleImage';
import { leftImage, rightImage } from '@/types';
import { values } from '@/Constants';

import img from '/public/imgs/office/1.jpg';
import img2 from '/public/imgs/site/3.jpg';
import img3 from '/public/imgs/site/4.jpg';

import img4 from '/public/imgs/site/2.jpg';
import img5 from '/public/imgs/office/2.jpg';
import img6 from '/public/imgs/office/3.jpg';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <PageHeader index={0} />

      <AboutUs />

      <section className='flex flex-col justify-center items-center gap-10 md:gap-12 bg-accent/10 py-20'>
        <Heading Tag='h3' text='Our Values: Defining Who We Are' />

        <div className='w-full grid place-items-center grid-cols-2 md:grid-cols-4 gap-10'>
          {values.map(({ title, icon }) => {
            return (
              <div key={title} className='flex flex-col items-center gap-2'>
                <span className='text-xl'>{icon}</span>
                <h3>{title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <MissionVision />

      <Team />
    </>
  );
};

export default page;

const AboutUs = () => {
  const main = { img: img, alt: 'Makers Female Engineers', priority: true };
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
    <section className='flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 xl:py-32'>
      <div className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'>
        <Heading text='About Us: Makers Engineering' Tag='h2' />
        <p>
          Step into the world of MAKERS Engineering Limited, where innovation
          illuminates our path. We weave a vibrant tapestry of expertise,
          crafting visionary projects across disciplines that sculpt the horizon
          of industries globally. Embrace a voyage marked by creativity and
          collaboration, as we stand resolute in transforming audacious concepts
          into concrete achievements. Our journey is a testament to engineering
          brilliance, inviting you to join hands with us and actualize the
          extraordinary. Together, let&apos;s engineer a future that echoes with
          the impact of innovation and the promise of progress. With every
          endeavor, we shape possibilities, leaving an indelible mark on the
          landscape of innovation.
        </p>
      </div>

      <TripleImage main={main} left={left} right={right} />
    </section>
  );
};

const MissionVision = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-10 md:gap-12 py-20'>
      <div className='w-4/5 lg:w-1/2 grid place-items-center relative group'>
        <Image
          src={img4}
          alt=''
          loading='lazy'
          className='w-full object-cover rounded-xl'
        />
      </div>

      <div className='w-10/12 flex flex-col lg:flex-row justify-center items-center gap-16 mt-8 xl:mt-16'>
        <div className='space-y-6'>
          <Heading Tag='h2' text='Our Mission: Transformative Future' />
          <p>
            At MAKERS Engineering Limited, our mission is to engineer a
            transformative future for South Sudan and beyond. With unwavering
            dedication, we strive to innovate across disciplines, creating
            solutions that not only meet challenges but exceed expectations.
            Rooted in integrity, collaboration, and sustainable practices, we
            craft a legacy of excellence. We are committed to fostering client
            partnerships, realizing their aspirations, and sculpting a world
            where engineering brilliance propels us all towards progress.
          </p>
        </div>
        <div className='space-y-6'>
          <Heading Tag='h2' text='Our Vision: Engineering Solutions' />
          <p>
            Our vision at MAKERS Engineering Limited is to be the cornerstone of
            pioneering engineering solutions that reshape industries, empower
            communities, and drive positive change on a global scale. We aim to
            lead with innovation, inspire through ingenuity, and create a legacy
            defined by our commitment to excellence. Through relentless
            exploration, collaboration, and forward-thinking, we envision a
            future where our engineering prowess shapes a more sustainable,
            connected, and prosperous world for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const main = { img: img4, alt: 'Makers Engineers', priority: true };
  const left: leftImage = {
    img: img5,
    alt: 'Makers Engineers',
    position: 'bottom',
  };
  const right: rightImage = {
    img: img6,
    alt: 'Makers Engineers',
    position: 'top',
  };
  return (
    <section className='flex flex-col lg:flex-row justify-evenly items-center bg-accent/10 gap-24 lg:gap-4 py-20 xl:py-32'>
      <TripleImage main={main} left={left} right={right} />
      <div className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'>
        <Heading
          text='Our Team: The Driving Force Behind Makers Engineering'
          Tag='h2'
        />
        <p>
          The Driving Force Behind Makers Engineering. At Makers, we believe in
          the power of collaboration and the strength of a unified vision. Our
          team is not just a group of individuals; we are a collective force
          dedicated to innovation and excellence. With diverse expertise and a
          shared passion for engineering, we work together seamlessly to bring
          visionary projects to life. Meet the brilliant minds shaping our
          future on the Team page and discover the spirit that fuels Makers
          Engineering Limited.
        </p>
        <div>
          <CTA text='Meet Our Team' page='/about/team' />
        </div>
      </div>
    </section>
  );
};
