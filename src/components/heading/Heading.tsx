import React from 'react';

type props = {
  text: string;
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: string;
  isCentered?: boolean;
};

const Heading = ({ Tag, text, size = '4xl', isCentered = false }: props) => {
  return (
    <Tag
      className={`text-3xl xl:text-${size} leading-normal relative before:content-[""] before:absolute before:-top-4 xl:before:-top-8 before:left-0 before:w-20 before:h-[5px] before:bg-primary before:rounded-xl`}
    >
      {text}
    </Tag>
  );
};

export default Heading;
