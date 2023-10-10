'use client';
import React from 'react';
import Image from 'next/image';

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { urlFor } from '@/services/sanity/sanityClient';
import { heroImages } from '@/types';

const ImageSlider = ({ images }: heroImages) => {
  const options = {
    type: 'loop',
    autoplay: true,
    // pauseOnHover: true,
  };
  return (
    <Splide
      hasTrack={false}
      options={options}
      tag='section'
      className='h-full after:content-[""] after:absolute after:w-full after:h-full after:inset-0 after:bg-[#0000007a] lg:after:bg-[#0000002a]'
    >
      <SplideTrack className='h-full'>
        {images.map(({ title, image }) => {
          const imgUrl = urlFor(image).url();
          return (
            <SplideSlide key={title}>
              <Image
                src={imgUrl}
                alt={title}
                width={2400}
                height={2400}
                className='h-full object-cover object-center'
                priority={true}
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
