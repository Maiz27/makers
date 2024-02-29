import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import { ServiceCardAlt } from '@/components/servicesComp/ServiceCard';
import { getMetadataByPageIndex, servicesList } from '@/Constants';
import { Metadata } from 'next';
import PageTransition from '@/components/animationWrappers/PageTransition';
import Heading from '@/components/heading/Heading';

export const metadata: Metadata = getMetadataByPageIndex(3);

const page = () => {
  return (
    <PageTransition>
      <PageHeader index={1} />
      <section className='my-20 space-y-12 mx-auto '>
        <Heading text='Our Comprehensive Services' Tag='h2' isCentered={true} />
        <div className='mx-auto w-11/12 grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {servicesList.map(({ title, desc, Icon }, index) => {
            return (
              <ServiceCardAlt
                title={title}
                desc={desc}
                Icon={Icon}
                key={index}
                index={index}
              />
            );
          })}
        </div>
      </section>
    </PageTransition>
  );
};

export default page;
