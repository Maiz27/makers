import { StaticImageData } from 'next/image';
import GalleryItem from './GalleryItem';

type props = {
  list: StaticImageData[] | string[];
};

const ImageGallery = ({ list }: props) => {
  return (
    <div className='max-w-5xl mx-auto grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
      {list.map((img, idx: number) => {
        return <GalleryItem key={idx} image={img} idx={idx} />;
      })}
    </div>
  );
};

export default ImageGallery;
