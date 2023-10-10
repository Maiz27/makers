export type heroImages = {
  images: Array<{
    title: string;
    index: number;
    image: Object;
  }>;
};

export type BlogBody = Array<{
  _type: string;
  children: Array<{
    _type: string;
    text: string;
  }>;
}>;
