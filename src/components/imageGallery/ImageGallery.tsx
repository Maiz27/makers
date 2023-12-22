'use client';
import Image, { StaticImageData } from 'next/image';
import React, { memo } from 'react';
import { FaCircleXmark, FaCircleLeft, FaCircleRight } from 'react-icons/fa6';
import useImageGallery from '@/hooks/useImageGallery';
import { urlFor } from '@/services/sanity/sanityClient';
import { interDesign } from '@/types';

interface ImageGalleryProps {
  images: Array<interDesign>;
}

const ImageGallery: React.FC<ImageGalleryProps> = React.memo(({ images }) => {
  const {
    isOpen,
    slideNumber,
    handleOpenModal,
    handleCloseModal,
    prevSlide,
    nextSlide,
    node,
  } = useImageGallery(images.length);

  const currentImage = urlFor(images[slideNumber].image).url();
  const currentTitle = images[slideNumber].title;

  return (
    <div>
      {isOpen && (
        <div className='fixed z-50 inset-0 w-full mx-auto grid place-items-center before:content-[""] before:absolute before:w-full before:h-full before:inset-0 before:bg-[rgba(0,0,0,0.8)]'>
          <div
            ref={node as React.MutableRefObject<HTMLDivElement>}
            className='z-50 relative max-w-6xl w-full lg:w-4/5'
          >
            <MemoizedImage
              image={currentImage}
              title={currentTitle}
              withHoverEffect={!isOpen}
            />
            <button
              className='z-50 absolute -top-4 lg:-top-6 right-0 lg:-right-6 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Close Gallery'
              onClick={handleCloseModal}
            >
              <FaCircleXmark />
            </button>
            <button
              className='z-50 absolute left-2 lg:-left-8  top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Previous Image'
              onClick={prevSlide}
            >
              <FaCircleLeft />
            </button>
            <button
              className='z-50 absolute right-2 lg:-right-8 top-1/2 -translate-y-1/2 text-2xl md:text-3xl lg:text-4xl text-base-100'
              title='Next Image'
              onClick={nextSlide}
            >
              <FaCircleRight />
            </button>
          </div>
        </div>
      )}

      <div className='w-11/12 mx-auto grid place-items-center gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
        {images &&
          images.map(({ title, image }, index) => {
            const src = urlFor(image).url();
            return (
              <div
                className='w-full cursor-pointer rounded-2xl overflow-hidden'
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <MemoizedImage image={src} title={title} />
              </div>
            );
          })}
      </div>
    </div>
  );
});

// Memoized Image component
const MemoizedImage: React.FC<{
  image: string | StaticImageData;
  title: string;
  withHoverEffect?: boolean;
}> = memo(
  ({ image, title, withHoverEffect = true }) => (
    <Image
      src={image}
      alt={title}
      className={`max-w-full w-full rounded-2xl ${
        withHoverEffect && 'hover:scale-110 transition-transform duration-300'
      }`}
      width={1080}
      height={720}
      loading='lazy'
    />
  ),
  (prevProps, nextProps) => prevProps.image === nextProps.image
);

// Set display name for the component
ImageGallery.displayName = 'ImageGallery';
MemoizedImage.displayName = 'MemoizedImage';

// Export the component
export default ImageGallery;
