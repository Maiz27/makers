'use client';
import { MouseEventHandler } from 'react';
import Link from 'next/link';

type props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  page: string;
  type?: 'button' | 'reset' | 'submit';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isBtn?: boolean;
  isOutline?: boolean;
  bg?: 'primary' | 'secondary' | 'accent';
  className?: string;
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
}: props) => {
  if (isBtn) {
    return (
      <button
        className={
          isOutline
            ? `btn btn-${size} btn-outline border border-neutral normal-case hover:-translate-y-1 ${className}`
            : `btn btn-${size} btn-${bg} normal-case hover:-translate-y-1 ${className}`
        }
        type={type}
        onClick={onClick}
      >
        {text}
      </button>
    );
  } else {
    return (
      <Link
        className={
          isOutline
            ? `btn btn-${size} btn-outline border border-neutral normal-case hover:-translate-y-1 ${className}`
            : `btn btn-${size} btn-${bg} normal-case hover:-translate-y-1 ${className}`
        }
        href={page}
      >
        {text}
      </Link>
    );
  }
};

export default CTA;
