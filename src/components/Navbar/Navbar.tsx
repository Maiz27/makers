'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '/public/imgs/logo/logo-w.png';
import logo2 from '/public/imgs/logo/logo-b.png';

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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const node = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (node.current && !node.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header ref={node}>
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

          <button
            onClick={toggleMenu}
            className='lg:hidden text-3xl grid place-items-center z-50'
          >
            {isMenuOpen ? <FaTimes className='text-base-100' /> : <FaBars />}
          </button>
          <aside
            className={`fixed w-3/4 h-screen top-0 z-20 bg-secondary text-base-100 ${
              isMenuOpen ? 'left-1/4' : 'left-full'
            }`}
          >
            {isMenuOpen && (
              <nav className='h-full flex flex-col items-center gap-8 mt-20'>
                <Link href='/' className='flex aspect-square w-48'>
                  <Image
                    src={logo2}
                    alt='Makers Engineering Logo'
                    title='Makers Engineering Logo'
                    className='w-full object-cover'
                  />
                </Link>

                <h2 className='font-bold tracking-widest text-center text-2xl'>
                  Makers Engineering
                </h2>

                <ul className='flex flex-col'>
                  {links.map(({ name, path }) => {
                    return (
                      <Link
                        key={path}
                        href={path}
                        className='font-semibold  p-2 lg:p-0'
                        onClick={toggleMenu}
                      >
                        {name}
                      </Link>
                    );
                  })}
                </ul>
              </nav>
            )}
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
