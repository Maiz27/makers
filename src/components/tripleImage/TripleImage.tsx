import React from 'react';
import Image from 'next/image';
import { tripleImageProps } from '@/types';
import AnimateInView from '../animationWrappers/AnimateInView';
import { slideLeft, slideRight } from '@/Constants';

const TripleImage = ({
  main,
  right,
  left,
  mainExpand = false,
  animateFrom,
  animationDelay = 0.3,
  animationThreshold = 0.8,
}: tripleImageProps) => {
  const animation = () => {
    if (animateFrom) {
      return animateFrom === 'r' ? slideLeft : slideRight;
    }
  };

  return (
    <AnimateInView
      {...animation()}
      threshold={animationThreshold}
      delay={animationDelay}
      className={`w-4/5 ${
        mainExpand ? 'lg:w-1/2' : 'lg:w-1/3'
      } grid place-items-center relative group`}
    >
      <Image
        src={main.img}
        alt={main.alt}
        className='w-full object-cover rounded-xl'
        priority={main.priority}
        width={500}
        height={500}
      />
      <Image
        src={right.img}
        alt={right.alt}
        width={250}
        height={250}
        style={
          right.position === 'top' ? { top: '-2.5rem' } : { bottom: '-2.5rem' }
        }
        className='absolute -right-4 lg:-right-10 2xl:-right-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
      />
      <Image
        src={left.img}
        alt={left.alt}
        width={250}
        height={250}
        style={
          left.position === 'top' ? { top: '-2.5rem' } : { bottom: '-2.5rem' }
        }
        className='absolute -left-4 lg:-left-10 2xl:-left-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
      />
    </AnimateInView>
  );
};

export default TripleImage;
