import { notFound } from 'next/navigation';
import { fetchSanityData, urlFor } from '@/services/sanity/sanityClient';
import { getPostBySlug } from '@/services/sanity/queries';
import PageHeader from '@/components/pageHeader/PageHeader';
import BlogBody from '@/components/blogComp/BlogBody';
import { blog } from '@/types';
import PageTransition from '@/components/animationWrappers/PageTransition';
import BlogShare from '@/components/blogComp/BlogShare';

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

  const { body } = post;

  return (
    <PageTransition tag='article'>
      <PageHeader blog={post} />

      <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 mt-10 mb-20'>
        <section className='w-full lg:w-2/3'>
          <BlogBody body={body} />
        </section>

        <aside className='w-full lg:w-1/3 max-w-lg card shadow-lg flex-col items-center pb-4 sticky top-28 gap-2'>
          <BlogShare />
        </aside>
      </div>
    </PageTransition>
  );
};

export default page;
