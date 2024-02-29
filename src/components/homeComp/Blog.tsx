import Heading from '@/components/heading/Heading';
import CTA from '@/components/CTA/CTA';
import BlogCard from '../blogComp/BlogCard';
import { getStringDate } from '@/Constants';
import AnimateInView from '../animationWrappers/AnimateInView';
import { blog } from '@/types';
import { fetchSanityData } from '@/services/sanity/sanityClient';
import { getLatestPosts } from '@/services/sanity/queries';

export const revalidate = 60;

const Blog = async () => {
  const latestBlogs: blog[] = await fetchSanityData(getLatestPosts);

  return (
    <section
      className={`min-h-screen flex flex-col justify-center py-20 ${
        latestBlogs.length > 0 ? 'gap-48' : 'gap-8'
      }`}
    >
      <AnimateInView
        threshold={0.5}
        delay={0.5}
        className='w-4/5 md:w-11/12 flex flex-col md:flex-row mx-auto justify-evenly items-center gap-8'
      >
        <div className='w-full md:w-1/2 max-w-lg'>
          <Heading
            Tag='h2'
            text='Our Insights: Exploring Engineering Trends and Innovations'
          />
        </div>

        <div className='w-full md:w-1/2 space-y-4'>
          <p>
            Discover the latest engineering trends and innovations through our
            insights. Short, insightful, and engaging, our articles offer a
            glimpse into the future of construction. Stay updated, and ahead of
            the curve with Makers Engineering Limited.
          </p>

          <CTA text='Explore Insights' page='/blog' />
        </div>
      </AnimateInView>

      {latestBlogs.length > 0 ? (
        <div className='grid place-items-center mx-auto gap-y-40 gap-x-8 grid-cols-1 md:grid-cols-2 w-4/5 md:w-11/12 max-w-5xl'>
          {latestBlogs.map(
            (
              {
                slug,
                title,
                author,
                publishedAt,
                description,
                mainImage,
                categories,
                body,
              },
              idx: number
            ) => {
              return (
                <BlogCard
                  key={slug.current}
                  index={idx}
                  slug={slug}
                  title={title}
                  categories={categories}
                  publishedAt={getStringDate(publishedAt)}
                  description={description}
                  mainImage={mainImage}
                  author={author}
                  body={body}
                />
              );
            }
          )}
        </div>
      ) : (
        <div className='w-4/5 max-w-xl text-center mx-auto'>
          <p>
            Currently on a blog hiatus! Stay tuned for new insights from Makers
            Engineering Limited. Explore other sections or reach out to us in
            the meantime. Thanks for your understanding!
          </p>
        </div>
      )}
    </section>
  );
};

export default Blog;
