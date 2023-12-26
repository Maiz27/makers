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
  FaUser,
  FaEnvelopeOpenText,
  FaComment,
} from 'react-icons/fa';
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6';
import { BiSolidTrafficCone } from 'react-icons/bi';
import { MdMail, MdPhoneIphone } from 'react-icons/md';

import { blogBody, headerList } from './types';

import aboutBg from '/public/imgs/site/1.jpg';
import teamBg from '/public/imgs/site/6.jpg';
import projectBg from '/public/imgs/wallpapers/construction.jpg';
import BlogBg from '/public/imgs/wallpapers/library.jpg';
import servicesBg from '/public/imgs/wallpapers/construction2.jpg';
import contactBg from '/public/imgs/wallpapers/contact.jpg';
import blueprint from '/public/imgs/blueprint.jpg';

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
  {
    name: 'Contact',
    path: '/contact',
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
    link: 'https://facebook.com/p/Makers-Engineering-Ltd-100057367189870/',
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
    text: "Get in touch with Makers Engineering Limited. Your journey towards innovative solutions and collaborative excellence starts here. Whether you have inquiries, partnership proposals, or simply want to connect, we are ready to assist you. Reach out and let's build something extraordinary together.",
    bg: contactBg,
  },
  {
    heading: 'Our Team',
    text: 'The Driving Force Behind Makers Engineering. At Makers, we believe in the power of collaboration and the strength of a unified vision. Our team is not just a group of individuals; we are a collective force dedicated to innovation and excellence.',
    bg: teamBg,
  },
  {
    heading: '404 - Page Not Found',
    text: "Oops! Lost in the construction zone. Head back to our homepage or navigate around to explore the world of Makers Engineering. If you need assistance, we're just a click away!",
    bg: blueprint,
  },
  {
    heading: '404 - Blog Not Found',
    text: 'Oops! This blog post seems to be missing. Head back to our main blog page or explore the rest of our site for more engineering insights.',
    bg: blueprint,
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

export const contactFormFields = [
  {
    name: 'name',
    label: 'Name',
    icon: <FaUser />,
    type: 'text',
    placeholder: 'John Doe',
    required: true,
  },
  {
    name: 'email',
    label: 'Email Address',
    icon: <MdMail />,
    type: 'email',
    placeholder: 'username@site.com',
    required: true,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    icon: <MdPhoneIphone />,
    type: 'tel',
    placeholder: '+211 (Optional)',
    required: false,
  },
  {
    name: 'subject',
    label: 'Message Subject',
    icon: <FaEnvelopeOpenText />,
    type: 'text',
    placeholder: 'Type here (Optional)',
    required: false,
  },
  {
    name: 'message',
    label: 'Message',
    icon: <FaComment />,
    type: 'textarea',
    placeholder: 'Type here',
    required: true,
  },
];

export const baseURl = 'https://www.makersengineeringltd.com';

export const pagesMetaData = [
  {
    title: 'Makers Engineering',
    description:
      "Discover a dynamic force in South Sudan's the engineering realm, MAKERS Engineering Limited.",
    type: 'website',
    url: `${baseURl}`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - About Us',
    description:
      "With a track record spanning multiple technical domains, we've been redefining possibilities in the Civil Engineering Industry since our inception in 2018.",
    type: 'website',
    url: `${baseURl}/about`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - Our Team',
    description:
      'The Driving Force Behind Makers Engineering. At Makers, we believe in the power of collaboration and the strength of a unified vision.',
    type: 'website',
    url: `${baseURl}/about/team`,
    image: `${baseURl}/imgs/site/1.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - Our Services',
    description:
      "Unveil the potential of your projects with MAKERS Engineering's broad service list that will fulfill all your needs.",
    type: 'website',
    url: `${baseURl}/services`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - Our Designs',
    description:
      "Unveil the potential of your projects with MAKERS Engineering's broad service list that will fulfill all your needs.",
    type: 'website',
    url: `${baseURl}/designs`,
    image: `${baseURl}/imgs/AD/ad1.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - Our Blogs',
    description:
      'Discover the latest engineering trends and innovations through our insights. Short, insightful, and engaging, our articles offer a glimpse into the future of construction.',
    type: 'website',
    url: `${baseURl}/blog`,
    image: `${baseURl}/imgs/wallpapers/library.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Makers Engineering - Contact Us',
    description:
      'Get in touch with Makers Engineering Limited. Your journey towards innovative solutions and collaborative excellence starts here.',
    type: 'website',
    url: `${baseURl}/contact`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
];

//Variant
export const slideRight = {
  initial: { opacity: 0, x: -25 },
  whileInView: { opacity: 1, x: 0 },
};

export const slideLeft = {
  initial: { opacity: 0, x: 25 },
  whileInView: { opacity: 1, x: 0 },
};

//functions
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
