import React from 'react';

type props = {
  text: string;
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl';
  isCentered?: boolean;
};

const Heading = ({ Tag, text, size = '5xl', isCentered = false }: props) => {
  return (
    <Tag
      className={`w-fit text-3xl lg:text-4xl xl:text-${size} ${
        isCentered && 'lg:mx-auto  lg:text-center'
      } leading-normal relative before:content-[""] before:absolute before:-top-4 xl:before:-top-8 before:left-0 before:w-20 before:h-[5px] before:bg-primary before:rounded-xl`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
