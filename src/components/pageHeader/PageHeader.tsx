import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Heading from '../heading/Heading';
import BreadCrumbs from './BreadCrumbs';

type props = {
  bg: string | StaticImageData;
};

const PageHeader = ({ bg }: props) => {
  return (
    <section className='relative'>
      <div className='w-full h-60 md:h-72 lg:h-80 xl:h-96 relative'>
        <Image
          src={bg}
          alt=''
          loading='eager'
          className='w-full h-full object-cover '
          priority
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='h-fit w-fit text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Heading text='About Us' Tag='h1' isCentered={true} />
      </div>
      <BreadCrumbs />
    </section>
  );
};

export default PageHeader;
