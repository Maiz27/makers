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
import projectBg from '/public/imgs/wallpapers/projects.png';
import designBg from '/public/imgs/wallpapers/design.png';
import BlogBg from '/public/imgs/wallpapers/library.jpg';
import servicesBg from '/public/imgs/wallpapers/construction2.jpg';
import contactBg from '/public/imgs/wallpapers/contact.jpg';
import blueprint from '/public/imgs/blueprint.jpg';

export const routes = [
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
    name: 'Design',
    path: '/design',
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
    link: 'https://www.linkedin.com/company/makers-engineering-limted/about/',
  },
  {
    icon: <FaXTwitter />,
    link: 'https://twitter.com/MakersEng',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://facebook.com/p/Makers-Engineering-Ltd-100057367189870/',
  },
];

export const headingList: headerList = [
  {
    heading: 'Pioneering Engineering Excellence: The Makers Story',
    text: "At the forefront of engineering innovation since 2018, Makers Engineering Limited stands as a testament to groundbreaking solutions in South Sudan's engineering landscape. Our journey is marked by relentless pursuit of excellence, transforming challenges into opportunities. Dive into our story and discover the passion and expertise that drive us forward.",
    bg: aboutBg,
  },
  {
    heading: 'Tailored Engineering Solutions: Services Beyond Expectations',
    text: 'Elevate your project with our bespoke engineering services, encompassing construction, architecture, and interior design. Makers Engineering Limited brings your vision to life with unparalleled precision, transforming concepts into tangible realities. Experience the fusion of functionality and beauty with our dedicated team.',
    bg: servicesBg,
  },
  {
    heading: 'Engineering the Future: A Portfolio of Distinction',
    text: 'Explore our portfolio where each project is a beacon of our innovative spirit and architectural excellence. At Makers Engineering Limited, we blend artistic vision with engineering precision, crafting spaces that stand the test of time. Witness the embodiment of our commitment to exceptional design and functionality.',
    bg: projectBg,
  },
  {
    heading: 'Design Philosophy: Where Aesthetics Meet Innovation',
    text: 'Our design ethos at Makers Engineering Limited marries creativity with practicality, setting new benchmarks in architectural design. Each creation is a narrative of beauty, efficiency, and sustainability, reflecting our dedication to exceeding the ordinary. Discover how our designs pave the way for future trends.',
    bg: designBg,
  },
  {
    heading: 'Insights from the Engineering Frontier: Our Expert Blog',
    text: 'Stay ahead of the curve with insights from the cutting edge of engineering. Our blog serves as your gateway to the future, featuring articles that inspire, inform, and challenge the status quo. Join us at Makers Engineering Limited in shaping the trends that define tomorrow.',
    bg: BlogBg,
  },
  {
    heading: 'Connect with Makers: Your Pathway to Engineering Innovation',
    text: "Embark on a journey of discovery and collaboration with Makers Engineering Limited. We're more than just an engineering firm; we're your partner in building the extraordinary. Contact us to explore how together, we can turn innovative ideas into reality.",
    bg: contactBg,
  },
  {
    heading: 'Meet the Visionaries: The People Powering Makers',
    text: "Behind every successful project at Makers Engineering Limited lies a team of visionary thinkers, innovators, and problem solvers. United by a shared mission to lead and inspire, our team's collective expertise is the cornerstone of our success. Get to know the minds and hearts driving our engineering achievements.",
    bg: teamBg,
  },
  {
    heading: "Oops! It Seems You've Taken a Wrong Turn",
    text: "The page you're looking for might have been moved, renamed, or it's just not here. But don't worry, navigating back to our homepage will put you back on track. And remember, we're here to help guide you back.",
    bg: blueprint,
  },
  {
    heading: "Missing in Action: This Blog Post Isn't Here",
    text: "It looks like the blog post you're searching for has vanished into thin air. But all is not lost! Return to our main blog page for more enlightening reads and the latest in engineering innovation.",
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
    title: 'Makers Engineering Juba, South Sudan',
    description:
      'Leading the engineering sector in Juba, South Sudan, MAKERS Engineering Limited is your partner in innovative civil and structural projects.',
    type: 'website',
    url: `${baseURl}`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'About Makers Engineering - Pioneering in South Sudan',
    description:
      "Since 2018, Makers Engineering Limited has been at the forefront of engineering landscape, transforming Juba's landscape with sustainable and innovative solutions.",
    type: 'website',
    url: `${baseURl}/about`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Our Team - The Heart of Makers Engineering',
    description:
      "Meet the visionary leaders and passionate engineers behind Makers Engineering Limited, driving innovation in South Sudan's engineering industry.",
    type: 'website',
    url: `${baseURl}/about/team`,
    image: `${baseURl}/imgs/site/1.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Engineering Services in Juba - Makers Engineering',
    description:
      'From architectural design to complex constructions, explore the comprehensive services offered by Makers Engineering Limited in Juba, South Sudan.',
    type: 'website',
    url: `${baseURl}/services`,
    image: `${baseURl}/imgs/logo/text-logo.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Our Projects - Engineering Marvels by Makers',
    description:
      "Discover the landmark projects that showcase Makers Engineering Limited's impact on Juba's infrastructure and beyond, embodying engineering excellence.",
    type: 'website',
    url: `${baseURl}/projects`,
    image: `${baseURl}/imgs/wallpapers/projects.png`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Design Innovation at Makers Engineering',
    description:
      'At the intersection of creativity and engineering, Makers Engineering Limited in Juba crafts designs that inspire and endure.',
    type: 'website',
    url: `${baseURl}/design`,
    image: `${baseURl}/imgs/AD/ad1.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Engineering Insights - Blog by Makers Engineering',
    description:
      'Gain expert insights into the latest trends, challenges, and innovations shaping the engineering world, curated by Makers Engineering Limited.',
    type: 'website',
    url: `${baseURl}/blog`,
    image: `${baseURl}/imgs/wallpapers/library.jpg`,
    icon: '/imgs/logo/icon.png',
  },
  {
    title: 'Contact Makers Engineering - Get in Touch',
    description:
      'Ready to start your next project in Juba, South Sudan? Connect with Makers Engineering Limited and bring your vision to life with our expert team.',
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
