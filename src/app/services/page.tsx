import React from 'react';
import PageHeader from '@/components/pageHeader/PageHeader';
import { ServiceCardAlt } from '@/components/servicesComp/ServiceCard';
import { pagesMetaData, servicesList } from '@/Constants';
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export const metadata: Metadata = {
  title: pagesMetaData[3].title,
  description: pagesMetaData[3].description,
  icons: {
    icon: pagesMetaData[3].icon,
    shortcut: pagesMetaData[3].icon,
    apple: pagesMetaData[3].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[3].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[3].type,
    url: pagesMetaData[3].url,
    title: pagesMetaData[3].title,
    description: pagesMetaData[3].description,
    siteName: pagesMetaData[3].title,
    images: [
      {
        url: pagesMetaData[3].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[3].url,
    images: [
      {
        url: pagesMetaData[3].image,
      },
    ],
  },
};

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
