'use client';
import { stats } from '@/types';
import React from 'react';
import CountUp from 'react-countup';

const Stats = ({
  stats: { projects, clients, workforce },
}: {
  stats: stats;
}) => {
  return (
    <div className='stats stats-vertical lg:stats-horizontal shadow-xl'>
      <div className='stat'>
        <div className='stat-title'>Projects</div>
        <div className='stat-value'>
          <CountUp start={0} end={projects.count} delay={0} />
        </div>
        <div className='stat-desc'>{projects.details}</div>
      </div>

      <div className='stat bg-primary'>
        <div className='stat-title'>Happy Clients</div>
        <div className='stat-value'>
          <CountUp start={0} end={clients.count} delay={0.5} />
        </div>
        <div className='stat-desc'>{clients.details}</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>Workforce</div>
        <div className='stat-value'>
          <CountUp start={0} end={workforce.count} delay={1} />
        </div>
        <div className='stat-desc'>{workforce.details}</div>
      </div>
    </div>
  );
};

export default Stats;
