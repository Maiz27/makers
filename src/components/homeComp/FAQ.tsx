import React from 'react';
import Image from 'next/image';
import Heading from '../heading/Heading';
import CTA from '../CTA/CTA';
import building from '/public/imgs/building.jpg';
import img from '/public/imgs/site/9.jpg';
import img2 from '/public/imgs/site/11.jpg';

const faqList = [
  {
    question: 'What services does your construction company provide?',
    answer:
      'Our construction company offers a wide range of services, including residential and commercial construction, remodeling, renovations, interior and exterior improvements, landscaping, and architectural design.',
  },
  {
    question: 'How experienced is your construction team?',
    answer:
      'Our construction team comprises highly skilled professionals with years of experience in the industry. They are experts in their respective fields and are dedicated to delivering high-quality workmanship on every project.',
  },
  {
    question:
      'Can you handle both small and large-scale construction projects?',
    answer:
      "Absolutely! Whether it's a small home renovation or a large commercial construction project, we have the expertise, resources, and equipment to handle projects of any scale. No project is too big or too small for us.",
  },
  {
    question:
      'What sets your construction company apart from others in the market?',
    answer:
      'We pride ourselves on our commitment to excellence, attention to detail, and exceptional customer service. Our team goes the extra mile to ensure client satisfaction, and we use high-quality materials and the latest construction techniques to deliver outstanding results.',
  },
  {
    question: 'How do you ensure the safety of your construction sites?',
    answer:
      'Safety is our top priority. We strictly adhere to all safety regulations and guidelines. Our construction sites are supervised by experienced professionals, and we conduct regular safety inspections to identify and mitigate potential hazards, ensuring a secure working environment for our team and anyone involved in the project.',
  },
];

const FAQ = () => {
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 lg:py-0'>
      <div className='w-4/5 lg:w-1/3 grid place-items-center relative group'>
        <Image
          src={building}
          alt='Building'
          className='w-full object-cover rounded-xl'
        />
        <Image
          src={img}
          alt='Blueprint'
          className='absolute -bottom-10 -right-4 lg:-right-10 2xl:-right-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
        />
        <Image
          src={img2}
          alt='Blueprint'
          className='absolute -top-10 -left-4 lg:-left-10 2xl:-left-20 z-10 w-28 md:w-32 lg:w-28 xl:w-32 2xl:w-40 aspect-square object-cover rounded-xl shadow-xl'
        />
      </div>

      <div className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'>
        <Heading
          text='Our Common Queries: Answers to Your Questions'
          Tag='h2'
        />

        <div className='flex flex-col justify-center items-center gap-4'>
          {faqList.map(({ question, answer }, idx) => {
            return (
              <div
                key={idx}
                tabIndex={0}
                className='collapse collapse-arrow border border-base-300 bg-base-200'
              >
                <div className='collapse-title font-medium'>{question}</div>
                <div className='collapse-content text-sm'>
                  <p>{answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <CTA text='Learn More' page='/about' />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
