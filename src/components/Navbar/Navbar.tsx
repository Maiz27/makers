'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import CTA from '../CTA/CTA';
import { routes } from '@/Constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import icon from '/public/imgs/logo/icon.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const node = useRef<HTMLElement | null>(null);

  useLockBodyScroll(isMenuOpen);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsTransparent(false);
    } else if (window.scrollY <= 100 && isMenuOpen) {
      setIsTransparent(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (node.current && !node.current.contains(event.target)) {
        setMenuOpen(false);
        changeBackground();
      }
    };

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
      className={`w-full top-0 z-50 transition-all duration-500 ${
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
              className='h-auto w-auto object-scale-down'
            />
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='flex justify-around items-center px-1 gap-12 xl:gap-20 font-bold'>
            {routes.map(({ name, path }) => {
              if (name !== 'Contact')
                return <Route key={path} route={{ name, path }} />;
            })}
          </ul>
        </div>
        <div className='navbar-end gap-2'>
          <CTA page='/contact' text='Contact' />
          <label className='inline-grid lg:hidden swap swap-rotate text-3xl text-neutral group transition-transform'>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' checked={isMenuOpen} onChange={toggleMenu} />

            {/* hamburger icon */}
            <div className='swap-off fill-current mx-auto group-hover:scale-110 group-active:scale-95'>
              <FaBars />
            </div>

            {/* close icon */}
            <div className='swap-on fill-current mx-auto group-hover:scale-110 group-active:scale-95'>
              <FaTimes />
            </div>
          </label>
        </div>
      </nav>
      <MobileMenu menuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;

const MobileMenu = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? 'fit-content' : '0px',
      }}
      className='block overflow-hidden md:hidden bg-base-100 text-neutral'
    >
      <div className='flex justify-between md:justify-around items-center p-4'>
        {routes.map(({ name, path }) => {
          if (name !== 'Contact')
            return (
              <Route
                key={path}
                route={{ name, path }}
                toggleMenu={toggleMenu}
              />
            );
        })}
      </div>
    </motion.div>
  );
};

const Route = ({
  route,
  toggleMenu,
}: {
  route: { name: string; path: string };
  toggleMenu?: () => void;
}) => {
  const { name, path } = route;
  return (
    <Link
      href={path}
      key={path}
      onClick={() => toggleMenu && toggleMenu()}
      className='transition-colors hover:text-yellow-500 hover:scale-110 nav-hover font-semibold'
      style={{
        textShadow:
          '-1px -1px 0px rgba(255, 255, 255, 0.5),1px -1px 0px rgba(255, 255, 255, 0.5),-1px  1px 0px rgba(255, 255, 255, 0.5),1px  1px 0px rgba(255, 255, 255, 0.5)',
      }}
    >
      {name}
    </Link>
  );
};
