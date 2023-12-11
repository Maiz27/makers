import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface SwapColumnProps<T> {
  items: T[];
  renderBaseComponent: (props: { item: T }) => React.ReactNode;
  renderSlidingComponent: (props: { item: T }) => React.ReactNode;
}

const SwapColumn = <T,>({
  items,
  renderBaseComponent,
  renderSlidingComponent,
}: SwapColumnProps<T>) => {
  const [featureInView, setFeatureInView] = useState(items[0]);

  return (
    <section className='relative mx-auto max-w-7xl'>
      <SlidingFeatureDisplay<T>
        featureInView={featureInView}
        renderSlidingComponent={renderSlidingComponent}
      />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className='-mt-[100vh] hidden md:block' />

      {items.map((item, idx) => (
        <Content<T>
          key={idx}
          featureInView={item}
          setFeatureInView={setFeatureInView}
          renderBaseComponent={renderBaseComponent}
          renderSlidingComponent={renderSlidingComponent}
        />
      ))}
    </section>
  );
};

interface SlidingFeatureDisplayProps<T> {
  featureInView: T;
  renderSlidingComponent: (props: { item: T }) => React.ReactNode;
}

const SlidingFeatureDisplay = <T,>({
  featureInView,
  renderSlidingComponent,
}: SlidingFeatureDisplayProps<T>) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView['contentPosition'] === 'l' ? 'flex-end' : 'flex-start',
      }}
      className='pointer-events-auto sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex'
    >
      <motion.div
        layout
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        className='h-fit w-3/5 rounded-xl p-8'
      >
        {renderSlidingComponent({ item: featureInView })}
      </motion.div>
    </div>
  );
};

interface ContentProps<T> {
  setFeatureInView: React.Dispatch<React.SetStateAction<T>>;
  featureInView: T;
  renderBaseComponent: (props: { item: T }) => React.ReactNode;
  renderSlidingComponent: (props: { item: T }) => React.ReactNode;
}

const Content = <T,>({
  setFeatureInView,
  featureInView,
  renderBaseComponent,
  renderSlidingComponent,
}: ContentProps<T>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: '-150px',
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [featureInView, isInView, setFeatureInView]);

  return (
    <section
      ref={ref}
      className='relative z-0 flex h-fit md:h-screen'
      style={{
        justifyContent:
          featureInView['contentPosition'] === 'l' ? 'flex-start' : 'flex-end',
      }}
    >
      <div className='grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {renderBaseComponent({ item: featureInView })}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='mt-8 block md:hidden'
        >
          {renderSlidingComponent({ item: featureInView })}
        </motion.div>
      </div>
    </section>
  );
};

export default SwapColumn;
