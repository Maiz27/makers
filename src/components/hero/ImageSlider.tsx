'use client';
import React from 'react';
import Image from 'next/image';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { heroImages } from '@/Constants';

const ImageSlider = () => {
  const options = {
    type: 'loop',
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <Splide hasTrack={false} options={options} tag='section' className='h-full'>
      <SplideTrack className='h-full'>
        {heroImages.map(({ name, src }) => {
          return (
            <SplideSlide key={name}>
              <Image
                src={src}
                alt={name}
                className='h-full object-cover object-center'
                priority
              />
            </SplideSlide>
          );
        })}
      </SplideTrack>

      <div className='splide__arrows hidden' />
      <ul
        className='splide__pagination -translate-x-1/2 lg:translate-x-0 lg:w-1/3'
        style={{ left: '50%' }}
      ></ul>
    </Splide>
  );
};

export default ImageSlider;
