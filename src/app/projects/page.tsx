import { Metadata } from 'next';
import PageTransition from '@/components/animationWrappers/PageTransition';
import PageHeader from '@/components/pageHeader/PageHeader';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getProjects } from '@/services/sanity/queries';
import ProjectsSwapColumn from '@/components/DesignComp/ProjectsSwapColumn';
import { getMetadataByPageIndex } from '@/Constants';
import Heading from '@/components/heading/Heading';

export const metadata: Metadata = getMetadataByPageIndex(4);

const page = async () => {
  const projects = await fetchSanityData(getProjects);

  return (
    <PageTransition>
      <PageHeader index={2} />

      <div className='mt-20'>
        <Heading text='Our Innovative Projects' Tag='h2' isCentered={true} />
      </div>
      <ProjectsSwapColumn projects={projects} />
    </PageTransition>
  );
};

export default page;
