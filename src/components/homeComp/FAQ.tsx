import Heading from '../heading/Heading';
import TripleImage from '../tripleImage/TripleImage';
import { FAQ, leftImage, rightImage } from '@/types';
import AnimateInView from '../animationWrappers/AnimateInView';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getFAQsList } from '@/services/sanity/queries';

export const revalidate = 60;

const FAQ = async () => {
  const data = await fetchSanityData(getFAQsList);
  const list: FAQ[] = data.FAQs;

  const main = {
    img: '/imgs/wallpapers/construction.jpg',
    alt: 'Building',
    priority: false,
  };
  const left: leftImage = {
    img: '/imgs/crane.jpg',
    alt: 'Crane',
    position: 'top',
  };
  const right: rightImage = {
    img: '/imgs/construction.jpg',
    alt: 'construction',
    position: 'bottom',
  };

  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-24 lg:gap-4 py-20 lg:py-0'>
      <TripleImage main={main} left={left} right={right} animateFrom='l' />

      <AnimateInView
        threshold={0.5}
        className='w-4/5 lg:w-1/2 max-w-2xl flex flex-col gap-8'
      >
        <Heading
          text='Our Common Queries: Answers to Your Questions'
          Tag='h2'
        />

        <div className='flex flex-col justify-center items-center gap-4'>
          {list
            .sort((a, b) => a.index - b.index)
            .map(({ question, answer }, idx) => {
              return (
                <AnimateInView key={idx} delay={++idx * 0.2}>
                  <div
                    tabIndex={0}
                    className='collapse collapse-arrow border border-base-300 bg-base-200'
                  >
                    <div className='collapse-title font-medium'>{question}</div>
                    <div className='collapse-content text-sm'>
                      <p>{answer}</p>
                    </div>
                  </div>
                </AnimateInView>
              );
            })}
        </div>
      </AnimateInView>
    </section>
  );
};

export default FAQ;
