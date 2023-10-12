import React from 'react';
import CTA from '../CTA/CTA';
import Heading from '../heading/Heading';
import TripleImage from '../tripleImage/TripleImage';
import { leftImage, rightImage } from '@/types';
import blueprint from '/public/imgs/blueprint.jpg';
import img from '/public/imgs/site/9.jpg';
import img2 from '/public/imgs/site/11.jpg';

const About = () => {
  const main = { img: blueprint, alt: 'Blueprint', priority: false };
  const left: leftImage = {
    img: img,
    alt: 'Makers Engineers',
    position: 'bottom',
  };
  const right: rightImage = {
    img: img2,
    alt: 'Makers Engineers',
    position: 'top',
  };
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 lg:py-0'>
      <TripleImage main={main} left={left} right={right} />

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
