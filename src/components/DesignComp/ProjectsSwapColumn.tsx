'use client';
import Image from 'next/image';
import { urlFor } from '@/services/sanity/sanityClient';
import Heading from '../heading/Heading';
import SwapColumn from './SwapColumn';
import { blogBody, project, projectStatus } from '@/types';
import BlogBody from '../blogComp/BlogBody';

const ProjectsSwapColumn = ({ projects }: { projects: project[] }) => {
  projects.forEach((project, idx) => {
    project.contentPosition = idx % 2 ? 'l' : 'r';
  });

  return (
    <section>
      <SwapColumn
        items={projects}
        renderBaseComponent={({ item: { title, status, description } }) => (
          <Base title={title} description={description} status={status} />
        )}
        renderSlidingComponent={({ item: { images } }) => (
          <Sliding images={images} />
        )}
      />
    </section>
  );
};

export default ProjectsSwapColumn;

const Base = ({
  title,
  status,
  description,
}: {
  title: string;
  status: projectStatus;
  description: blogBody;
}) => {
  const getStatusColor = (status: projectStatus) => {
    switch (status) {
      case 'Complete':
        return 'success';
        break;
      case 'Ongoing':
        return 'error';
        break;
      case 'Upcoming':
        return 'warning';
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Heading Tag='h3' text={title} size='3xl' />
      <p
        className={`badge badge-outline font-medium py-2 badge-${getStatusColor(
          status
        )}`}
      >
        {status}
      </p>

      <BlogBody body={description} />
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
