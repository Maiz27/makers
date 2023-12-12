'use client';
import { motion, TargetAndTransition } from 'framer-motion';

interface AnimateInViewProps {
  threshold?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
  tag?: string;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
}

const AnimateInView = ({
  threshold = 0.2,
  delay = 0.3,
  children,
  className = '',
  tag = 'div',
  initial = { opacity: 0, y: 15 },
  whileInView = { opacity: 1, y: 0 },
}: AnimateInViewProps) => {
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      initial={initial}
      whileInView={whileInView}
      transition={{ delay: delay }}
      viewport={{ amount: threshold, once: false }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimateInView;
