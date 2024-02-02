import Image from 'next/image';
import CTA from '../CTA/CTA';
import Heading from '../heading/Heading';
import { headingList } from '@/Constants';

const Default404 = () => {
  return (
    <section className='relative'>
      <div className='w-full h-[100dvh] relative'>
        <Image
          src={headingList[7].bg}
          width={2400}
          height={2400}
          alt='hero image'
          loading='eager'
          className='h-full object-cover object-center'
          priority={true}
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
      </div>
      <div className='h-3/4 w-10/12 mt-2 flex flex-col justify-center text-white absolute inset-0 z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Heading text={headingList[7].heading} Tag='h1' isCentered={true} />

        <div className='flex flex-col lg:justify-evenly gap-8 mt-4 lg:mt-10 text-sm md:text-base lg:w-3/5 lg:mx-auto tracking-wider leading-5'>
          <p className='lg:text-center'>{headingList[7].text}</p>

          <div className='flex justify-center items-center gap-4'>
            <CTA text='Return Home' page='/' />
            <CTA text='Contact Us' page='/contact' bg='secondary' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Default404;
