import { notFound } from 'next/navigation';
import { fetchSanityData, urlFor } from '@/services/sanity/sanityClient';
import { getPostBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';
import { blog } from '@/types';
import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogShare from '@/components/blogComp/BlogShare';
import Recommendations from '@/components/blogComp/Recommendations';

export const revalidate = 60; // revalidate every minute

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const post: blog = await fetchSanityData(getPostBySlug, { slug });
  if (post) {
    const imgUrl = urlFor(post.mainImage).url();
    const url = `https://www.makersengineeringltd.com/blog/${post.slug.current}`;

    return {
      title: post.title,
      description: post.description,
      image: imgUrl,

      icons: {
        icon: '/imgs/logo/icon.png',
        shortcut: '/imgs/logo/icon.png',
        apple: '/imgs/logo/icon.png',
        other: {
          rel: 'apple-touch-icon-precomposed',
          url: '/imgs/logo/icon.png',
        },
      },
      openGraph: {
        type: 'article',
        url: url,
        title: post.title,
        description: post.description,
        siteName: post.title,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        site: url,
        images: [
          {
            url: imgUrl,
          },
        ],
      },
    };
  }
}

const page = async ({ params: { slug } }) => {
  const post = await fetchSanityData(getPostBySlug, { slug });

  if (!post) {
    return notFound();
  }

  const { body, slug: currentSlug, categories } = post;

  return (
    <PageTransition tag='article'>
      <PageHeader blog={post} />

      <div className='w-11/12 mx-auto flex flex-col xl:flex-row items-center lg:items-start gap-4 mt-10 mb-20'>
        <section className='w-full xl:w-2/3'>
          <BlogBody body={body} />
        </section>

        <aside className='w-full xl:w-1/3 flex flex-col items-center sticky top-20 gap-8'>
          <BlogShare />

          <Recommendations slug={currentSlug.current} categories={categories} />
        </aside>
      </div>
    </PageTransition>
  );
};

export default page;
