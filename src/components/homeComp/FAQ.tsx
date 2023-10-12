import React from 'react';
import Heading from '../heading/Heading';
import TripleImage from '../tripleImage/TripleImage';
import { leftImage, rightImage } from '@/types';
import { faqList } from '@/Constants';
import building from '/public/imgs/building.jpg';
import img from '/public/imgs/site/9.jpg';
import img2 from '/public/imgs/site/11.jpg';

const FAQ = () => {
  const main = { img: building, alt: 'Building', priority: false };
  const left: leftImage = {
    img: img,
    alt: 'Makers Engineers',
    position: 'top',
  };
  const right: rightImage = {
    img: img2,
    alt: 'Makers Engineers',
    position: 'bottom',
  };

  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 lg:py-0'>
      <TripleImage main={main} left={left} right={right} />

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
      </div>
    </section>
  );
};

export default FAQ;
