import { baseURl, routes } from '@/Constants';
import { getAllPosts } from '@/services/sanity/queries';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { blog } from '@/types';

export default async function sitemap() {
  const allPosts: blog[] = await fetchSanityData(getAllPosts);
  const posts = allPosts.map(({ slug, publishedAt }) => ({
    url: `${baseURl}/blog/${slug.current}`,
    lastModified: publishedAt,
  }));

  const allRoutes = [...routes, { name: 'Team', path: '/about/team' }];

  const _routes = allRoutes.map(({ path }) => ({
    url: `${baseURl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  return [..._routes, ...posts];
}
