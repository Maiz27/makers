'use client';
// import React, { useEffect, useState } from 'react';
// import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import { AnimatePresence, motion } from 'framer-motion';

type props = {
  children: any;
  classNames?: string;
  tag?: string;
};
const PageTransition = ({ children, classNames, tag = 'div' }: props) => {
  // const [isAnimating, setIsAnimating] = useState(true);
  // useLockBodyScroll(isAnimating);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsAnimating(false);
  //   }, 2000);
  // }, []);
  const MotionComponent = motion[tag];
  return (
    <>
      <AnimatePresence>
        <MotionComponent
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.1 }}
          className={classNames}
        >
          {children}
        </MotionComponent>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;

/* <AnimatePresence>
      <div className='absolute inset-0 pointer-events-none z-50 overflow-x-hidden'>
        {Array.from({ length: 5 }, (_, index) => (
          <motion.div
            key={index}
            initial={{ x: '-100%' }}
            animate={{ x: ['-100%', '0%', '100%'] }}
            exit={{ translateX: '100%' }}
            transition={{
              type: 'tween',
              easing: 'easeInOut',
              duration: 1.5,
              delay: index * 0.2,
            }}
            className={`w-full h-1/5  ${
              index % 2 ? 'bg-primary' : 'bg-neutral'
            }`}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 2 }}
        className={classNames}
      >
        {children}
      </motion.div>
    </AnimatePresence> */
