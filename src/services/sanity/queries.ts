export const getAllPosts = `*[_type == 'post'] {
    title,
    slug,
    description,
    author-> {
      name,
    },
    mainImage,
    categories[]-> {
      title,
    },
    publishedAt,
  }`;

export const getPostBySlug = `*[_type == 'post' && slug.current == $slug] {
    title,
    slug,
    description,
    author-> {
        name,
      },
    mainImage,
    categories[]-> {
        title,
    },
    publishedAt,
    body,
  }[0]`;

export const getLatestPosts = `*[_type == 'post'] 
  | order(publishedAt desc)[0..1] {
      title,
      slug,
      description,
      author-> {
          name,
      },
      mainImage,
      categories[]-> {
          title,
      },
      publishedAt,
  }`;

export const getRecommendedPosts = `*[_type == "post" && $category in categories[]->title && slug.current != $currentSlug]
| order(publishedAt desc)[0..1] {
  title,
  slug,
  categories[]-> {
    title,
  },
  mainImage,
}`;

export const getPostCategories = `*[_type == 'category'] 
| order(title asc) {
    title,
}`;

export const getFAQsList = `*[_type == 'homePageData'] {
    FAQs,
}[0]`;

export const getHeroImagesAndStat = `*[_type == 'homePageData'] {
  projects,
  clients,
  workforce,
  heroImages,
}[0]`;

export const getAllFounders = `*[_type == 'founder'] {
  name,
  title,
  description,
  image,
}`;

export const getAllMembers = `*[_type == 'team'] | order(title asc) {
  name,
  title,
  image,
}`;

export const getArchDesigns = `*[_type == 'archDesigns'] | order(title asc) {
title,
description,
images,
}`;

export const getInterDesigns = `*[_type == 'interDesigns'] | order(title asc) {
title,
image,
}`;
