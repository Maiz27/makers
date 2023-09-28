import hero1 from '/public/imgs/hero/1.jpg';
import hero2 from '/public/imgs/hero/2.jpg';
import hero3 from '/public/imgs/hero/3.jpg';

export const routes = [
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

export const heroImages = [
  {
    name: '1',
    src: hero1,
  },
  {
    name: '2',
    src: hero2,
  },
  {
    name: '3',
    src: hero3,
  },
];

export const aboutImages = [hero1, hero2, hero2, hero1];
