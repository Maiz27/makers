import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';
import InteriorDesigns from '@/components/DesignComp/InteriorDesigns';

const page = () => {
  return (
    <>
      <PageHeader index={2} />

      <ArchitectureDesigns />

      <InteriorDesigns />
    </>
  );
};

export default page;
