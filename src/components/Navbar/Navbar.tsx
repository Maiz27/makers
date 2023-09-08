import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import logo from '/public/imgs/logo/logo-w.png';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
];
const Navbar = () => {
  return (
    <header>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <Link href='/' className='h-full grid place-items-center'>
            <Image
              src={logo}
              alt='Makers Engineering Logo'
              title='Makers Engineering Logo'
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex justify-around items-center px-1 gap-10'>
            {links.map(({ name, path }) => {
              return (
                <Link href={path} key={path}>
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
        <div className='navbar-end gap-2'>
          <a className='btn btn-primary normal-case'>Contact</a>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {links.map(({ name, path }) => {
                return (
                  <Link href={path} key={path}>
                    {name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
