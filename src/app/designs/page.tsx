import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';

const page = () => {
  return (
    <>
      <PageHeader index={2} />

      <ArchitectureDesigns />
    </>
  );
};

export default page;
