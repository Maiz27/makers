import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';
import InteriorDesigns from '@/components/DesignComp/InteriorDesigns';
import { getMetadataByPageIndex } from '@/Constants';
import { Metadata } from 'next';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getArchDesigns, getInterDesigns } from '@/services/sanity/queries';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const metadata: Metadata = getMetadataByPageIndex(5);

const page = async () => {
  const [archDesigns, interDesigns] = await Promise.all([
    fetchSanityData(getArchDesigns),
    fetchSanityData(getInterDesigns),
  ]);

  return (
    <PageTransition>
      <PageHeader index={3} />

      <ArchitectureDesigns designs={archDesigns} />

      <InteriorDesigns designs={interDesigns} />
    </PageTransition>
  );
};

export default page;
