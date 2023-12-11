import React from 'react';
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import PageHeader from '@/components/pageHeader/PageHeader';
import { sanityClient, urlFor } from '@/services/sanity/sanityClient';
import { getAllFounders, getAllMembers } from '@/services/sanity/queries';

export const revalidate = 60; // revalidate every minute

const fetchFounders = async () => {
  const founders = await sanityClient.fetch(getAllFounders);
  return founders;
};

const fetchTeamMembers = async () => {
  const team = await sanityClient.fetch(getAllMembers);
  return team;
};

const page = async () => {
  const [founders, team] = await Promise.all([
    fetchFounders(),
    fetchTeamMembers(),
  ]);

  return (
    <>
      <PageHeader index={5} />

      <section className='w-4/5 lg:w-full mx-auto flex flex-col justify-center items-center py-20'>
        <Heading
          Tag='h2'
          text="Our Founders: Guiding Makers' Path to Success"
        />

        <Founders list={founders} />
      </section>

      <Team list={team} />
    </>
  );
};

export default page;

const Founders = ({ list }) => {
  return (
    <div className='flex flex-col justify-center items-center gap-20 py-12 lg:py-20'>
      {list.map(({ image, name, title, description }, index: number) => {
        const imgUrl = urlFor(image).url();
        return (
          <div
            key={index}
            className={`flex flex-col justify-evenly gap-8 lg:gap-0 ${
              index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            } justify-center items-center`}
          >
            <Image
              src={imgUrl}
              alt={name}
              width={500}
              height={500}
              className='w-full lg:w-2/5 max-w-lg object-cover rounded-xl shadow-lg'
            />

            <div className='w-full md:w-4/5 lg:w-2/5 space-y-4 max-w-4xl'>
              <div className='space-y-1'>
                <h3 className='text-xl tracking-wider font-semibold'>{name}</h3>
                <h4 className='text-lg'>{title}</h4>
              </div>

              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Team = ({ list }) => {
  return (
    <section className='flex flex-col items-center gap-10 pb-20'>
      <div className='w-4/5 grid place-items-center'>
        <Heading Tag='h2' text='Our Dynamic Team: Architects of Innovation' />
      </div>

      <div className='grid place-items-center gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {list.map(({ name, title, image }, index: number) => {
          const imgUrl = urlFor(image).url();
          return (
            <div key={index} className='w-4/5 space-y-4'>
              <div className='h-96 lg:h-72 2xl:h-96'>
                <Image
                  src={imgUrl}
                  alt={name}
                  width={500}
                  height={500}
                  loading='lazy'
                  className='h-full object-cover object-top rounded-xl shadow-lg'
                />
              </div>

              <div className='flex flex-col justify-center items-center'>
                <h3 className='text-lg tracking-wider font-semibold'>{name}</h3>
                <h4>{title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
