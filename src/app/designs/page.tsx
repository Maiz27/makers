import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import ArchitectureDesigns from '@/components/DesignComp/ArchitectureDesigns';
import InteriorDesigns from '@/components/DesignComp/InteriorDesigns';

export const metadata = {
  title: 'Makers Engineering - Our Designs',
  image: '/imgs/AD/ad1.jpg',
  description:
    'Explore our portfolio to witness the seamless fusion of form and function where architectural innovation meets artistic expression.',
};

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
