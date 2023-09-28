'use client';
import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  return (
    <div className='stats stats-vertical lg:stats-horizontal shadow-xl'>
      <div className='stat'>
        <div className='stat-title'>Projects</div>
        <div className='stat-value'>
          <CountUp start={0} end={250} delay={0} />
        </div>
        <div className='stat-desc'>2015 - 2023</div>
      </div>

      <div className='stat bg-primary'>
        <div className='stat-title'>Happy Clients</div>
        <div className='stat-value'>
          <CountUp start={0} end={900} delay={0.5} />
        </div>
        <div className='stat-desc'>↗︎ 5 (7%)</div>
      </div>

      <div className='stat'>
        <div className='stat-title'>Workforce</div>
        <div className='stat-value'>
          <CountUp start={0} end={500} delay={1} />
        </div>
        <div className='stat-desc'>↗︎ 20 (2%)</div>
      </div>
    </div>
  );
};

export default Stats;
