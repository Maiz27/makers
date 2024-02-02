import PageHeader from '@/components/pageHeader/PageHeader';
import Heading from '@/components/heading/Heading';
import ContactForm from '@/components/forms/ContactForm';
import { FaPhoneAlt, FaEnvelope, FaMapPin } from 'react-icons/fa';
import AnimateInView from '@/components/animationWrappers/AnimateInView';
import { Metadata } from 'next';
import { pagesMetaData } from '@/Constants';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import PageTransition from '@/components/animationWrappers/PageTransition';

export const metadata: Metadata = {
  title: pagesMetaData[7].title,
  description: pagesMetaData[7].description,
  icons: {
    icon: pagesMetaData[7].icon,
    shortcut: pagesMetaData[7].icon,
    apple: pagesMetaData[7].icon,
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: pagesMetaData[7].icon,
    },
  },
  openGraph: {
    type: pagesMetaData[7].type,
    url: pagesMetaData[7].url,
    title: pagesMetaData[7].title,
    description: pagesMetaData[7].description,
    siteName: pagesMetaData[7].title,
    images: [
      {
        url: pagesMetaData[7].image,
      },
    ],
  } as OpenGraph,
  twitter: {
    card: 'summary_large_image',
    site: pagesMetaData[7].url,
    images: [
      {
        url: pagesMetaData[7].image,
      },
    ],
  },
};

const page = () => {
  return (
    <PageTransition>
      <PageHeader index={5} />

      <section className='my-20 flex w-full flex-col lg:flex-row justify-evenly items-center lg:items-start space-y-12 lg:space-y-0'>
        <AnimateInView className='w-4/5 lg:w-2/6 flex flex-col justify-center items-center space-y-8'>
          <Heading Tag='h2' text='Get In Touch' />

          <p>
            We are eager to assist you in any way possible. Feel free to reach
            out to us through our contact numbers, or send us an email at if it
            isn&lsquo;t urgent. For those who prefer a face-to-face
            conversation, you can find us at Atlabara Block (B), Facebook Road,
            Juba, CES, South Sudan. However you choose to connect, Makers is
            here to help you with innovative solutions and dedicated support.
          </p>

          <div className='w-full flex flex-col justify-center items-start gap-8 transition-colors lg:pt-10'>
            <div className='flex w-full items-center justify-evenly md:justify-start md:gap-4 group '>
              <FaPhoneAlt className='text-2xl group-hover:text-accent' />
              <a href='tel:+211910000999' className='hover:text-accent '>
                +211-910-000-999
              </a>
              <div className='divider divider-horizontal' />
              <a href='tel:+211917892716' className='hover:text-accent'>
                +211-917-892-716
              </a>
            </div>
            <div className='flex items-center gap-4 group'>
              <FaEnvelope className='text-2xl group-hover:text-accent' />
              <a
                href='mailto:info@makersengineeringltd.com'
                className='hover:text-accent'
              >
                info@makersengineeringltd.com
              </a>
            </div>

            <div className='flex items-center gap-4 '>
              <FaMapPin className='text-2xl' />
              <p>Atlabara Block (B) Facebook Road Juba, CES, South Sudan</p>
            </div>
          </div>
        </AnimateInView>
        <ContactForm />
      </section>
    </PageTransition>
  );
};

export default page;
