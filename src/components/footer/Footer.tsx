import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { routes, socials } from '@/Constants';
import logo from '/public/imgs/logo/text-logo.png';

const Footer = () => {
  return (
    <footer className='w-full min-h-60 md:h-72'>
      <div className='h-28 flex flex-col md:flex-row justify-between items-center md:pr-8 xl:pr-12 border-t-2 border-b-2 border-neutral/30'>
        <div className='h-2/3 -ml-7'>
          <Image
            src={logo}
            alt='Makers Engineering Logo'
            className='h-full object-contain'
          />
        </div>
        <ul className='w-4/5 md:w-1/2 max-w-sm flex justify-between items-center'>
          {routes.map(({ path, name }) => {
            return (
              <Link
                key={name}
                href={path}
                className='transition-colors hover:text-yellow-500 hover:scale-110 font-bold'
              >
                {name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-start w-4/5 md:w-11/12 mx-auto mt-8 gap-24 md:gap-0'>
        <div className='flex flex-col justify-center gap-2'>
          <p>Find us on:</p>
          <ul className='flex items-center gap-8'>
            {socials.map(({ icon, link }) => {
              return (
                <a
                  key={link}
                  href={link}
                  target='_blank'
                  className='text-xl transition-colors hover:text-yellow-500 hover:scale-110'
                >
                  {icon}
                </a>
              );
            })}
          </ul>
        </div>

        <div className='flex flex-col justify-center gap-2'>
          <p>
            <span className='font-bold'>Makers Engineering</span> &copy;{' '}
            {new Date().getFullYear().toString()}, All rights reserved.
          </p>
          <p>
            Website by
            <a
              href='https://nilotik.tech'
              className='text-accent font-bold pl-2'
            >
              Nilotik
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
