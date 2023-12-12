import AnimateInView from '../animateInView/AnimateInView';
import Heading from '../heading/Heading';
import ImageGallery from '../imageGallery/ImageGallery';
import { interiorDesigns } from '@/Constants';

const InteriorDesigns = () => {
  return (
    <AnimateInView tag='section' className='w-11/12 mx-auto mb-20 space-y-8'>
      <div className='max-w-3xl mx-auto space-y-4 text-center'>
        <Heading Tag='h2' text='Our Interior Designs' isCentered={true} />
        <p>
          A showcase of the harmonious blend of functionality and aesthetics,
          where every detail is carefully crafted to elevate spaces.
        </p>
      </div>

      <ImageGallery list={interiorDesigns} />
    </AnimateInView>
  );
};

export default InteriorDesigns;
