import CTA from '@/components/CTA/CTA';
import Heading from '@/components/heading/Heading';
import React from 'react';
import TripleImage from '@/components/tripleImage/TripleImage';
import AD from 'public/imgs/AD/ad1.jpg';
import ID1 from 'public/imgs/ID/id1.jpg';
import ID3 from 'public/imgs/ID/id3.jpg';
import { leftImage, rightImage } from '@/types';
import AnimateInView from '@/components/animateInView/AnimateInView';

const Designs = () => {
  const main = { img: AD, alt: 'Architecture Design' };
  const right: leftImage = {
    img: ID1,
    alt: 'Interior Design',
    position: 'bottom',
  };
  const left: rightImage = {
    img: ID3,
    alt: 'Interior Design',
    position: 'top',
  };
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-20 lg:gap-0 py-20 lg:py-0'>
      <AnimateInView className='w-4/5 lg:w-2/5 flex flex-col gap-8 items-start'>
        <Heading
          text='Our Signature Designs: Elevating Spaces, Redefining Aesthetics'
          Tag='h2'
        />
        <p>
          Immerse yourself in a world where architectural innovation meets
          artistic expression. Each design crafted by Makers Engineering Limited
          is a signature statement, meticulously curated to transcend the
          ordinary and redefine the very essence of aesthetics. Explore our
          portfolio to witness the seamless fusion of form and function.
        </p>

        <CTA text='Explore Designs' page='/designs' />
      </AnimateInView>
      <TripleImage main={main} left={left} right={right} animateFrom='r' />
    </section>
  );
};

export default Designs;
