import React from 'react';
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import PageHeader from '@/components/pageHeader/PageHeader';
import { foundersList } from '@/Constants';

const page = () => {
  return (
    <>
      <PageHeader index={5} />

      <section className='w-4/5 lg:w-full mx-auto flex flex-col justify-center items-center py-20'>
        <Heading
          Tag='h2'
          text="Our Founders: Guiding Makers' Path to Success"
        />

        <Founders list={foundersList} />
      </section>
    </>
  );
};

export default page;

export const Founders = ({ list }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 py-20'>
      {list.map(({ img, name, title, desc }, index: number) => {
        return (
          <div
            key={index}
            className={`flex flex-col justify-evenly gap-8 lg:gap-0 ${
              index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } justify-center items-center`}
          >
            <Image
              src={img}
              alt={name}
              className='w-full lg:w-2/5 max-w-lg object-cover rounded-xl shadow-lg'
            />

            <div className='w-full md:w-4/5 lg:w-2/5 space-y-4 max-w-4xl'>
              <div className='space-y-1'>
                <h3 className='text-xl tracking-wider font-semibold'>{name}</h3>
                <h4 className='text-lg font-medium'>{title}</h4>
              </div>

              <p className=''>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
