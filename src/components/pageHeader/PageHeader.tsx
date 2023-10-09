import React from 'react';
import Image, { StaticImageData } from 'next/image';
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
        <div className='content-[""] absolute inset-0 bg-black opacity-40 z-20'></div>
      </div>
      <BreadCrumbs />
    </section>
  );
};

export default PageHeader;
