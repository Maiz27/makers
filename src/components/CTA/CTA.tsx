'use client';
import { MouseEventHandler } from 'react';
import Link from 'next/link';

type props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  page?: string;
  type?: 'button' | 'reset' | 'submit';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isBtn?: boolean;
  isOutline?: boolean;
  bg?: 'primary' | 'secondary' | 'accent';
  className?: string;
  loading?: boolean;
};

const CTA = ({
  text,
  onClick = () => {},
  page,
  type = 'button',
  isBtn = false,
  isOutline = false,
  bg = 'primary',
  size = 'md',
  className = '',
  loading,
}: props) => {
  if (isBtn) {
    return (
      <button
        className={`btn btn-${size} normal-case hover:-translate-y-1 ${className} ${
          isOutline ? `btn-outline border border-neutral` : `btn-${bg}`
        } ${loading && 'animate-pulse'}`}
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    );
  } else {
    return (
      <Link
        className={`btn btn-${size} normal-case hover:-translate-y-1 ${className} ${
          isOutline ? `btn-outline border border-neutral` : `btn-${bg}`
        } ${loading && 'animate-pulse'}`}
        href={page!}
      >
        {text}
      </Link>
    );
  }
};

export default CTA;
