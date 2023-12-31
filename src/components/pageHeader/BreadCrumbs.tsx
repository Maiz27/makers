'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BreadCrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const isLastSegment = index === pathSegments.length - 1;
    const breadcrumb = {
      label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the first letter
      link: `/${pathSegments.slice(0, index + 1).join('/')}`, // Construct the breadcrumb link
      isActive: isLastSegment && !segment.includes('?'), // Set isActive to true if it's the last segment and there are no query parameters
    };
    return breadcrumb;
  });

  return (
    <div className='text-sm lg:text-base breadcrumbs bg-accent/10 pl-4 md:pl-10'>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {breadcrumbs.map(({ link, label, isActive }) => (
          <li key={link}>
            {!isActive ? (
              <Link href={link}>{label}</Link>
            ) : (
              <span>{label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BreadCrumbs;
