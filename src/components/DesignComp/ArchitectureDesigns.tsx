'use client';
import Image from 'next/image';
import Heading from '@/components/heading/Heading';
import SwapColumn from './SwapColumn';
import { archDesign } from '@/types';
import { urlFor } from '@/services/sanity/sanityClient';

const ArchitectureDesigns = ({ designs }: { designs: archDesign[] }) => {
  designs.forEach((design, idx) => {
    design.contentPosition = idx % 2 ? 'l' : 'r';
  });
  return (
    <section className='my-20 space-y-8 md:space-y-0'>
      <div className='max-w-3xl mx-auto space-y-4 text-center px-4'>
        <Heading Tag='h2' text='Our Architecture Designs' isCentered={true} />
        {/* <p>
          A showcase of innovation and elegance. From contemporary marvels to
          timeless classics, each design reflects our commitment to
          architectural excellence.
        </p> */}
      </div>

      <SwapColumn
        items={designs}
        renderBaseComponent={({ item: { title, description } }) => (
          <Base title={title} description={description} />
        )}
        renderSlidingComponent={({ item: { images } }) => (
          <Sliding images={images} />
        )}
      />
    </section>
  );
};

export default ArchitectureDesigns;

const Base = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Heading Tag='h3' text={title} size='3xl' />
      <p className='text-slate-600 mt-2'>{description}</p>
    </>
  );
};

const Sliding = ({ images }: { images: Object[] }) => {
  const imgsUrl: string[] = [];
  images.forEach((image) => imgsUrl.push(urlFor(image).url()));

  return (
    <div className='w-full h-64 lg:h-96 xl:h-[30rem] relative group'>
      <Image
        src={imgsUrl[0]}
        width={1080}
        height={720}
        alt='1'
        className='w-2/3 h-fit absolute top-0 right-0 rounded-xl shadow-lg transition-transform duration-500 -translate-x-1/2 group-hover:translate-x-0'
      />
      <Image
        src={imgsUrl[1]}
        width={1080}
        height={720}
        alt='2'
        className='w-2/3 h-fit absolute bottom-0 left-0 rounded-xl shadow-lg transition-transform duration-500 translate-x-1/2 group-hover:translate-x-0'
      />
    </div>
  );
};
