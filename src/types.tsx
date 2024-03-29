import { StaticImageData } from 'next/image';

export type heroImage = {
  index: number;
  image: Object;
};

export type tripleImageProps = {
  main: {
    img: string | StaticImageData;
    alt: string;
    priority?: boolean;
  };
  left: leftImage;
  right: rightImage;
  mainExpand?: boolean;
  animateFrom?: 'l' | 'r';
  animationThreshold?: number;
  animationDelay?: number;
};

export type leftImage = {
  img: string | StaticImageData;
  alt: string;
  position: 'bottom' | 'top';
};
export type rightImage = {
  img: string | StaticImageData;
  alt: string;
  position: 'bottom' | 'top';
};

export type blog = {
  index: number;
  slug: {
    current: string;
  };
  publishedAt: string;
  title: string;
  description: string;
  categories: blogCategory[];
  mainImage: string | StaticImageData;
  author: {
    name: string;
    title: string;
    image: Object;
  };
  body: blogBody;
};

export type blogCategory = {
  title: string;
};

export type blogBody = Array<{
  _type: string;
  style: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}>;

export type headerList = Array<{
  heading: string;
  text: string;
  bg: string | StaticImageData;
}>;

export type stats = {
  projects: stat;
  clients: stat;
  workforce: stat;
};

export type FAQ = {
  index: number;
  question: string;
  answer: string;
};

export type project = {
  contentPosition: 'l' | 'r';
  title: string;
  status: projectStatus;
  description: blogBody;
  images: Array<Object>;
};

export type projectStatus = 'Upcoming' | 'Ongoing' | 'Complete';

export type archDesign = {
  contentPosition: 'l' | 'r';
  title: string;
  description: string;
  images: Array<Object>;
};

export type interDesign = {
  title: string;
  image: Object;
};

type stat = {
  count: number;
  details: string;
};
