import CTA from '@/components/CTA/CTA';
import Heading from '@/components/heading/Heading';
import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsList } from '@/Constants';

const Projects = () => {
  return (
    <section className='min-h-screen bg-accent/10 flex flex-col lg:flex-row justify-evenly items-center gap-20 lg:gap-0 py-20 lg:py-0'>
      <div className='w-4/5 lg:w-2/5 flex flex-col gap-8 items-start'>
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
      <div className='w-4/5 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl'>
        {projectsList.map(({ title, isComplete, img, design }, idx) => {
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
