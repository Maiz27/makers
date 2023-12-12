export const getAllPosts = `*[_type == 'post'] {
    title,
    slug,
    description,
    author-> {
      name,
      title,
      image,
    },
    mainImage,
    categories[]-> {
      title,
    },
    publishedAt,
    body,
  }`;

export const getPostBySlug = `*[_type == 'post' && slug.current == $slug] {
    title,
    slug,
    description,
    author-> {
        name,
        title,
        image,
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
          title,
          image,
      },
      mainImage,
      categories[]-> {
          title,
      },
      publishedAt,
      body,
  }`;

export const getPostCategories = `*[_type == 'category'] 
| order(title asc) {
    title,
}`;

export const getAllHeroImages = `*[_type == 'heroImages'] 
| order(index asc) {
    title,
    index,
    image,
}`;

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
