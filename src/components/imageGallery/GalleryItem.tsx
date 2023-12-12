'use client';
import Image from 'next/image';
import { useIsClient } from '@/context/IsClientContext';
import { FaTimes } from 'react-icons/fa';

const GalleryItem = ({ idx, image }) => {
  const id = `image-${idx}`;
  const isClient = useIsClient();
  const openModal = () => {
    isClient && (document.getElementById(id) as HTMLFormElement).showModal();
  };

  return (
    <>
      <button onClick={openModal} className='card overflow-hidden'>
        <Image src={image} alt='id' className='w-full h-full' />
      </button>
      <dialog id={id} className='modal'>
        <div className='modal-box bg-neutral w-4/5 max-w-4xl relative'>
          <form method='dialog' className='absolute top-2 right-2'>
            <button
              title='Close Modal'
              className='text-base-100 text-3xl grid place-items-center shadow-2xl'
            >
              <FaTimes />
            </button>
          </form>
          <div className='h-60 md:h-auto w-full'>
            <Image src={image} alt='id' className='w-full h-full' />
          </div>
        </div>
      </dialog>
    </>
  );
};

export default GalleryItem;
