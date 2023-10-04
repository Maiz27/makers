import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaHardHat } from 'react-icons/fa';

type props = {
  title: string;
  isComplete: boolean;
  design: string | StaticImageData;
  img: string | StaticImageData;
};

const ProjectCard = ({ title, isComplete, design, img }: props) => {
  return (
    <div className='w-full aspect-square relative shadow rounded-xl group'>
      <div className='h-1/2 p-6 flex flex-col justify-center bg-neutral rounded-t-xl'>
        <h3 className='text-xl mb-2 font-semibold text-base-100'>{title}</h3>
        <p className='text-sm font-light text-slate-300'>
          {isComplete ? 'Complete' : 'Ongoing'}
        </p>
      </div>
      <div className='absolute right-2 top-2 text-7xl group-hover:rotate-[20deg] transition-transform duration-500'>
        <FaHardHat />
      </div>
      <div className='absolute inset-0 bg-slate-200 z-10 rounded-xl overflow-hidden transition-all duration-300 group-hover:top-1/2 group-hover:right-1/2 group-hover:rounded-t-none group-hover:rounded-br-none'>
        <Image
          src={design}
          alt={`${title} - Design`}
          loading='lazy'
          className='w-full h-full object-cover'
        />
      </div>
      <Image
        src={img}
        alt={title}
        loading='lazy'
        className='w-1/2 h-1/2 absolute bottom-0 right-0 object-cover rounded-br-xl'
      />
    </div>
  );
};

export default ProjectCard;
