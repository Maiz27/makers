import {
  FaDraftingCompass,
  FaHardHat,
  FaPaintRoller,
  FaCogs,
  FaTools,
  FaKey,
  FaTasks,
  FaCity,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { BiSolidTrafficCone } from 'react-icons/bi';
import { blogBody, headerList } from './types';

import aboutBg from '/public/imgs/site/1.jpg';
import teamBg from '/public/imgs/site/6.jpg';
import projectBg from '/public/imgs/wallpapers/construction.jpg';
import BlogBg from '/public/imgs/wallpapers/library.jpg';
import servicesBg from '/public/imgs/wallpapers/construction2.jpg';

import d1 from '/public/imgs/designs/d1.jpg';
import d2 from '/public/imgs/designs/d2.jpg';
import d3 from '/public/imgs/designs/d3.jpg';

import c1 from '/public/imgs/designs/c1.jpg';
import c2 from '/public/imgs/designs/c2.jpg';
import c3 from '/public/imgs/designs/c3.jpg';

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
    name: 'Designs',
    path: '/designs',
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

// export const projectsList = [
//   {
//     title: 'Project #',
//     isComplete: true,
//     design: d1,
//     img: c1,
//   },
//   {
//     title: 'Project #',
//     isComplete: false,
//     design: d2,
//     img: c2,
//   },
//   {
//     title: 'Project #',
//     isComplete: true,
//     design: d3,
//     img: c3,
//   },
// ];

export const faqList = [
  {
    question: 'What services does your construction company provide?',
    answer:
      'Our construction company offers a wide range of services, including residential and commercial construction, remodeling, renovations, interior and exterior improvements, landscaping, and architectural design.',
  },
  {
    question: 'How experienced is your construction team?',
    answer:
      'Our construction team comprises highly skilled professionals with years of experience in the industry. They are experts in their respective fields and are dedicated to delivering high-quality workmanship on every project.',
  },
  {
    question:
      'Can you handle both small and large-scale construction projects?',
    answer:
      "Absolutely! Whether it's a small home renovation or a large commercial construction project, we have the expertise, resources, and equipment to handle projects of any scale. No project is too big or too small for us.",
  },
  {
    question:
      'What sets your construction company apart from others in the market?',
    answer:
      'We pride ourselves on our commitment to excellence, attention to detail, and exceptional customer service. Our team goes the extra mile to ensure client satisfaction, and we use high-quality materials and the latest construction techniques to deliver outstanding results.',
  },
  {
    question: 'How do you ensure the safety of your construction sites?',
    answer:
      'Safety is our top priority. We strictly adhere to all safety regulations and guidelines. Our construction sites are supervised by experienced professionals, and we conduct regular safety inspections to identify and mitigate potential hazards, ensuring a secure working environment for our team and anyone involved in the project.',
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

export const headingList: headerList = [
  {
    heading: 'About Makers',
    text: "Discover a dynamic force in the engineering realm, MAKERS Engineering Limited. With a track record spanning multiple technical domains, we've been redefining possibilities in the Civil Engineering Industry since our inception in 2018.",
    bg: aboutBg,
  },
  {
    heading: 'Our Services',
    text: 'Unveil the potential of your projects with MAKERS Engineering Limited, specialized construction, architecture, and interior design services. From visionary architectural concepts to thoughtfully crafted interiors, we transform spaces into living works of art.',
    bg: servicesBg,
  },
  {
    heading: 'Our Designs',
    text: 'Immerse yourself in a world where architectural innovation meets artistic expression. Each design crafted by Makers Engineering Limited is a signature statement, meticulously curated to transcend the ordinary and redefine the very essence of aesthetics. Explore our portfolio to witness the seamless fusion of form and function.',
    bg: projectBg,
  },
  {
    heading: 'Our Blogs',
    text: 'Discover the latest engineering trends and innovations through our insights. Short, insightful, and engaging, our articles offer a glimpse into the future of construction. Stay updated, and ahead of the curve with Makers Engineering Limited.',
    bg: BlogBg,
  },
  {
    heading: 'Contact Us',
    text: '',
    bg: '',
  },
  {
    heading: 'Our Team',
    text: 'The Driving Force Behind Makers Engineering. At Makers, we believe in the power of collaboration and the strength of a unified vision. Our team is not just a group of individuals; we are a collective force dedicated to innovation and excellence.',
    bg: teamBg,
  },
];

export const values = [
  {
    icon: <FaShieldAlt />,
    title: 'Integrity',
  },
  {
    icon: <FaLightbulb />,
    title: 'Innovation',
  },
  {
    icon: <FaTrophy />,
    title: 'Excellence',
  },
  {
    icon: <FaHandshake />,
    title: 'Collaboration',
  },
];

const getWordCount = (blocks: blogBody) => {
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

export const calculateReadTime = (blocks: blogBody, speed = 200) => {
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
