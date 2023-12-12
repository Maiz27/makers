import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import { servicesList } from '@/Constants';
import { ServiceCardAlt } from '@/components/servicesComp/ServiceCard';

const page = () => {
  return (
    <>
      <PageHeader index={1} />

      <section className='my-20 mx-auto w-11/12 grid place-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
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
      </section>
    </>
  );
};

export default page;
