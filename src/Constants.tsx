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
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { BiSolidTrafficCone } from 'react-icons/bi';

import hero1 from '/public/imgs/hero/1.jpg';
import hero2 from '/public/imgs/hero/2.jpg';
import hero3 from '/public/imgs/hero/3.jpg';

import d1 from '/public/imgs/designs/d1.jpg';
import d2 from '/public/imgs/designs/d2.jpg';
import d3 from '/public/imgs/designs/d3.jpg';

import c1 from '/public/imgs/designs/c1.jpg';
import c2 from '/public/imgs/designs/c2.jpg';
import c3 from '/public/imgs/designs/c3.jpg';
import { BlogBody } from './types';

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
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
];

export const servicesList = [
  {
    title: 'Architectural & Interior Design',
    desc: 'Elevate your space with our cutting-edge Architectural & Interior Design services. Our expert team transforms concepts into captivating designs, ensuring a perfect blend of aesthetics and functionality. Experience seamless collaboration, attention to detail, and superior craftsmanship, creating spaces that captivate and convert visions into reality.',
    Icon: <FaDraftingCompass />,
  },
  {
    title: 'Building Construction',
    desc: 'Experience top-notch Building Construction services tailored to your needs. Our skilled team delivers superior craftsmanship, quality materials, and efficient project management, ensuring timely completion and unmatched durability. From concept to completion, trust us to turn your dreams into a concrete reality.',
    Icon: <FaHardHat />,
  },
  {
    title: 'Roads Construction',
    desc: 'Drive success with our Roads Construction expertise. Our team delivers high-quality road infrastructure, ensuring durability and safety. From planning to execution, we prioritize efficiency and precision, creating well-constructed roads that connect communities and businesses. Partner with us for reliable, long-lasting road solutions that pave the way for progress.',
    Icon: <BiSolidTrafficCone />,
  },
  {
    title: 'Fit-out Work',
    desc: 'Transform your space with our exceptional Fit-out Work services. We specialize in meticulous interior installations, optimizing every inch of your area for functionality and style. Providing tailored solutions, that leave a lasting impression and enhance your business environment, delivered on time and within budget.',
    Icon: <FaPaintRoller />,
  },
  {
    title: 'Mechanical & Electrical Engineering',
    desc: 'Empower your projects with our Mechanical & Electrical Engineering prowess. Our expert team provides cutting-edge solutions for seamless integration of mechanical and electrical systems, ensuring optimal performance and energy efficiency. Partner with us for reliable, innovative engineering services that enhance functionality and sustainability.',
    Icon: <FaCogs />,
  },
  {
    title: 'Maintenance & Repairs',
    desc: 'Ensure the longevity of your investments with our Maintenance & Repairs services. Our dedicated team provides timely, cost-effective solutions to keep your properties and facilities in pristine condition. From routine maintenance to emergency repairs, we offer peace of mind, minimizing downtime and maximizing the lifespan of your assets.',
    Icon: <FaTools />,
  },
  {
    title: 'Property Management',
    desc: 'Maximize the value of your real estate with our comprehensive Property Management services. We handle every aspect of property ownership, from tenant relations to maintenance and financial management. Our experienced team ensures that your properties are well-maintained, occupied, and profitable. Partner with us for hassle-free property ownership.',
    Icon: <FaKey />,
  },
  {
    title: 'Project Management',
    desc: 'Achieve project success with our expert Project Management services. Our seasoned team ensures seamless planning, execution, and oversight, keeping your projects on time and on budget. We prioritize communication, risk management, and quality control, ensuring a smooth journey from inception to completion. Collaborate with us for efficient project delivery.',
    Icon: <FaTasks />,
  },
  {
    title: 'Real Estate Development',
    desc: 'Unlock the potential of your real estate investments with our Real Estate Development expertise. Our seasoned professionals specialize in identifying opportunities, navigating regulations, and executing strategic plans to maximize property value. We take your vision and turn it into reality, ensuring a profitable return on investment.',
    Icon: <FaCity />,
  },
];

export const projectsList = [
  {
    title: 'Project #',
    isComplete: true,
    design: d1,
    img: c1,
  },
  {
    title: 'Project #',
    isComplete: false,
    design: d2,
    img: c2,
  },
  {
    title: 'Project #',
    isComplete: true,
    design: d3,
    img: c3,
  },
];

export const socials = [
  {
    icon: <FaLinkedinIn />,
    link: 'https://linkedin.com/',
  },
  {
    icon: <FaXTwitter />,
    link: 'https://twitter.com/',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://facebook.com/',
  },
];

const getWordCount = (blocks: BlogBody) => {
  let wordCount = 0;

  blocks.forEach((block) => {
    if (block._type === 'block' && block.children) {
      block.children.forEach((child) => {
        if (child._type === 'span' && child.text) {
          wordCount += child.text.split(' ').length;
        }
      });
    }
  });

  return wordCount;
};

export const calculateReadTime = (blocks: BlogBody, speed = 200) => {
  const wordCount = getWordCount(blocks);
  const readTime = Math.ceil(wordCount / speed);
  return readTime;
};

export const getStringDate = (StringDate: string, isRelative = false) => {
  const currentDate = new Date();
  const inputDate = new Date(StringDate);
  const timeDifference = Math.abs(currentDate.getTime() - inputDate.getTime());
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);

  if (isRelative) {
    if (daysDifference >= 1) {
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (hoursDifference >= 1) {
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else {
      return `${minutesDifference} min${
        minutesDifference !== 1 ? 's' : ''
      } ago`;
    }
  } else {
    // By default, display the date in the "weekday, month day, year" format
    return inputDate.toLocaleString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
};
