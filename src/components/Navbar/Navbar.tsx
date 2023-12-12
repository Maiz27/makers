'use client';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useLockBodyScroll from '@/context/useLockBodyScroll';
import { routes } from '@/Constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon from '/public/imgs/logo/icon.png';
import '../../app/globals.css';
import CTA from '../CTA/CTA';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const pathname = usePathname();

  const node = useRef<HTMLElement | null>(null);

  useLockBodyScroll(isMenuOpen);

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
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setIsTransparent(false);
    } else {
      setIsTransparent(true);
    }
  };

  return (
    <header
      ref={node}
      className={`w-full top-0 z-50 transition-all ${
        isTransparent ? 'absolute bg-transparent' : 'sticky shadow bg-base-100'
      }`}
    >
      <nav className='navbar'>
        <div className='navbar-start'>
          <Link href='/' className='grid place-items-center'>
            <Image
              src={icon}
              alt='Makers Engineering Logo'
              title='Makers Engineering Logo'
              width={30}
              height={20}
              loading='eager'
              priority
              className='h-full object-scale-down'
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex justify-around items-center px-1 gap-12 xl:gap-20 font-bold'>
            {routes.map(({ name, path }) => {
              if (name !== 'Contact')
                return (
                  <Link
                    href={path}
                    key={path}
                    className='transition-colors hover:text-yellow-500 hover:scale-110 nav-hover'
                    style={{
                      textShadow:
                        '-1px -1px 0px rgba(255, 255, 255, 0.5),1px -1px 0px rgba(255, 255, 255, 0.5),-1px  1px 0px rgba(255, 255, 255, 0.5),1px  1px 0px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    {name}
                  </Link>
                );
            })}
          </ul>
        </div>
        <div className='navbar-end gap-2'>
          <CTA page='/contact' text='Contact' />

          <button
            onClick={toggleMenu}
            className='lg:hidden text-3xl grid place-items-center z-50 text-base-100 mix-blend-difference'
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <aside
            className={`fixed w-3/4 h-screen top-0 z-20 bg-base-100 shadow-2xl ${
              isMenuOpen ? 'left-1/4' : 'left-full'
            }`}
          >
            {isMenuOpen && (
              <div className='h-full flex flex-col items-center gap-8 mt-20'>
                <Link href='/' className='flex aspect-square w-48'>
                  <Image
                    src={icon}
                    alt='Makers Engineering Logo'
                    title='Makers Engineering Logo'
                    className='w-full object-cover'
                    width={50}
                    height={20}
                  />
                </Link>

                <h2 className='font-bold tracking-widest text-center text-2xl'>
                  Makers Engineering
                </h2>

                <ul className='flex flex-col'>
                  {routes.map(({ name, path }) => {
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
              </div>
            )}
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
