import { StaticImageData } from 'next/image';

export type heroImages = {
  images: Array<{
    title: string;
    index: number;
    image: Object;
  }>;
};

export type blog = {
  index: number;
  slug: string;
  publishedAt: string;
  title: string;
  desc: string;
  categories: Array<{
    title: string;
  }>;
  img: string | StaticImageData;
  author: {
    name: string;
    title: string;
    image: Object;
  };
  body: BlogBody;
};

export type BlogBody = Array<{
  _type: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}>;
