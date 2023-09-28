import {
  FaDraftingCompass,
  FaHardHat,
  FaPaintRoller,
  FaCogs,
  FaTools,
  FaKey,
  FaTasks,
  FaCity,
} from 'react-icons/fa';
import { BiSolidTrafficCone } from 'react-icons/bi';

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

export const servicesList = [
  {
    title: 'Architectural & Interior Design',
    desc: 'Unlock Enchanting Spaces: Architectural and Interior Design Mastery Embark on a design journey that transcends boundaries with MAKERS Engineering Limited Architectural and Interior Design Services. From awe-inspiring structures to captivating interiors, we breathe life into your spaces, marrying innovation with aesthetics. Join us in crafting environments that tell compelling stories and evoke lasting impressions.',
    Icon: (
      <FaDraftingCompass className='absolute right-2 top-2 text-7xl opacity-20' />
    ),
  },
  {
    title: 'Building Construction',
    desc: 'Building Dreams, Brick by Brick: Unleash Potential with Our Construction Expertise Experience the art of construction redefined at MAKERS Engineering Limited Our mastery extends from foundations to the skyline, as we shape spaces that reflect innovation, durability, and your unique vision. Join hands with us to construct a future that stands strong, inspiring generations to come.',
    Icon: <FaHardHat className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
  {
    title: 'Roads Construction',
    desc: 'Unlock Enchanting Spaces: Architectural and Interior Design Mastery Embark on a design journey that transcends boundaries with MAKERS Engineering Limited Architectural and Interior Design Services. From awe-inspiring structures to captivating interiors, we breathe life into your spaces, marrying innovation with aesthetics. Join us in crafting environments that tell compelling stories and evoke lasting impressions.',
    Icon: (
      <BiSolidTrafficCone className='absolute right-2 top-2 text-7xl opacity-20' />
    ),
  },
  {
    title: 'Fit-out Work',
    desc: "MAKERS Engineering Limited fit-out work is a symphony of precision and aesthetics. With meticulous attention to detail, we curate interiors that embody your brand's essence, ensuring every corner radiates functionality and style. Let's collaborate to transform spaces into captivating environments that resonate with purpose and charm.",
    Icon: (
      <FaPaintRoller className='absolute right-2 top-2 text-7xl opacity-20' />
    ),
  },
  {
    title: 'Mechanical & Electrical Engineering',
    desc: "MAKERS Engineering Limited pioneers' advancements in both mechanical and electrical engineering, seamlessly merging functionality and innovation. From intricate machinery to sustainable power solutions, our expertise fuels progress, delivering solutions that redefine industries and electrify possibilities. Join us in engineering a future where technology meets ingenuity, driving lasting impact and transformative change.",
    Icon: <FaCogs className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
  {
    title: 'Maintenance & Repairs',
    desc: 'Sustaining Excellence: Elevate Buildings with Expert Maintenance and Repair Solutions MAKERS Engineering Limited redefines building maintenance and repair, ensuring structures stand strong and vibrant over time. Our expertise spans from preserving architectural beauty to resolving intricate issues, revitalizing spaces with care and precision. Join us to ensure your buildings age gracefully, preserving their integrity while embracing modernity.',
    Icon: <FaTools className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
  {
    title: 'Property Management',
    desc: 'Unlocking Value: Seamlessly Manage Properties with MAKERS Engineering Limited Experience a new dimension of property management with MAKERS Engineering Limited. Our comprehensive approach ensures your assets are optimally maintained, enhancing their value and potential. Entrust us to streamline operations, foster tenant satisfaction, and maximize returns, as we orchestrate excellence in property management, tailored to your unique needs.',
    Icon: <FaKey className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
  {
    title: 'Project Management',
    desc: 'Our project management expertise transforms dreams into reality, orchestrating every facet of execution. At MAKERS Engineering Ltd, we drive efficiency, mitigate risks, and deliver results that surpass expectations. Join hands with us to navigate complex projects, from inception to completion, and experience a journey defined by precision, collaboration, and the art of turning ideas into accomplishments.',
    Icon: <FaTasks className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
  {
    title: 'Real Estate Development',
    desc: "Elevate your real estate aspirations with MAKERS Engineering Ltd's development prowess. From conceptualization to realization, we create dynamic spaces that inspire, resonate, and set new standards. Join us to shape communities, redefine urban landscapes, and embrace innovation as we sculpt the future of real estate, one visionary project at a time.",
    Icon: <FaCity className='absolute right-2 top-2 text-7xl opacity-20' />,
  },
];
