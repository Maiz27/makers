import CTA from '@/components/CTA/CTA';
import Heading from '@/components/heading/Heading';
import React from 'react';
import ProjectCard from './ProjectCard';

import d1 from '/public/imgs/designs/d1.jpg';
import d2 from '/public/imgs/designs/d2.jpg';
import d3 from '/public/imgs/designs/d3.jpg';

import c1 from '/public/imgs/designs/c1.jpg';
import c2 from '/public/imgs/designs/c2.jpg';
import c3 from '/public/imgs/designs/c3.jpg';

const list = [
  {
    title: 'Project #',
    isComplete: true,
    design: d1,
    img: c1,
  },
  {
    title: 'Project #',
    isComplete: false,
    design: d2,
    img: c2,
  },
  {
    title: 'Project #',
    isComplete: true,
    design: d3,
    img: c3,
  },
];

const Projects = () => {
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col md:flex-row justify-evenly items-center gap-24 md:gap-4 lg:gap-0 py-20 md:py-0'>
      <div className='w-4/5 md:w-2/5 flex flex-col gap-8 items-start'>
        <Heading
          text='Our Impactful Works: Crafting Landmarks, Creating Legacies'
          Tag='h2'
        />
        <p>
          Our Impactful Works showcase our dedication to excellence. Through
          innovative design and meticulous execution, we create landmarks that
          stand as symbols of quality and craftsmanship. Each project is more
          than construction; it&apos;s a legacy, a testament to our commitment
          to shaping a better future. Explore and witness the impact of Makers
          Engineering Limited.
        </p>

        <CTA text='Explore Projects' page='/projects' />
      </div>
      <div className='w-4/5 md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl'>
        {list.map(({ title, isComplete, img, design }, idx) => {
          return (
            <ProjectCard
              key={idx}
              title={title}
              isComplete={isComplete}
              design={design}
              img={img}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
