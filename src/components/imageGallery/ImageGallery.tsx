import GalleryItem from './GalleryItem';
import { interDesign } from '@/types';
import { urlFor } from '@/services/sanity/sanityClient';

type props = {
  designs: interDesign[];
};

const ImageGallery = ({ designs }: props) => {
  return (
    <div className='max-w-5xl mx-auto grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {designs.map(({ image }, idx: number) => {
        const imgURl = urlFor(image).url();
        return <GalleryItem key={idx} image={imgURl} idx={idx} />;
      })}
    </div>
  );
};

export default ImageGallery;
