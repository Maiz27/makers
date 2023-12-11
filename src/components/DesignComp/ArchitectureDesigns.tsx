'use client';
import Image, { StaticImageData } from 'next/image';
import Heading from '@/components/heading/Heading';
import SwapColumn from './SwapColumn';
import { archDesigns } from '@/Constants';

const ArchitectureDesigns = () => {
  return (
    <section className='my-20 space-y-8'>
      <div className='max-w-3xl mx-auto space-y-4 text-center'>
        <Heading Tag='h2' text='Our Architecture Designs' isCentered={true} />
        <p>
          A showcase of innovation and elegance. From contemporary marvels to
          timeless classics, each design reflects our commitment to
          architectural excellence.
        </p>
      </div>

      <SwapColumn
        items={archDesigns}
        renderBaseComponent={({ item: { name, description } }) => (
          <Base name={name} description={description} />
        )}
        renderSlidingComponent={({ item: { images } }) => (
          <Sliding images={images} />
        )}
      />
    </section>
  );
};

export default ArchitectureDesigns;

const Base = ({ name, description }: { name: string; description: string }) => {
  return (
    <>
      <Heading Tag='h3' text={name} size='3xl' />
      <p className='text-slate-600 mt-2'>{description}</p>
    </>
  );
};

const Sliding = ({ images }: { images: string[] | StaticImageData[] }) => {
  return (
    <div className='w-full h-64 lg:h-96 xl:h-[30rem] relative group'>
      <Image
        src={images[0]}
        alt='1'
        className='w-2/3 h-fit absolute top-0 right-0 rounded-xl shadow-lg transition-transform duration-500 -translate-x-1/2 group-hover:translate-x-0'
      />
      <Image
        src={images[1]}
        alt='2'
        className='w-2/3 h-fit absolute bottom-0 left-0 rounded-xl shadow-lg transition-transform duration-500 translate-x-1/2 group-hover:translate-x-0'
      />
    </div>
  );
};
