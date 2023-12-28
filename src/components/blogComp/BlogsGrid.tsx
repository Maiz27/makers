'use client';
import BlogCard from './BlogCard';
import BlogsFilter from './BlogsFilter';
import useFilterBlogs from '@/hooks/useFilterBlogs';
import { getStringDate } from '@/Constants';
import { blog, blogCategory } from '@/types';

type props = {
  blogs: blog[];
  categories: blogCategory[];
};

const BlogsGrid = ({ blogs, categories }: props) => {
  const { filteredList, selectedCategories, setSelectedCategories } =
    useFilterBlogs(blogs);

  if (blogs.length <= 0) {
    return (
      <div className='w-4/5 max-w-xl text-center mx-auto mt-20'>
        <p>
          Currently on a blog hiatus! Stay tuned for new insights from Makers
          Engineering Limited. Explore other sections or reach out to us in the
          meantime. Thanks for your understanding!
        </p>
      </div>
    );
  }

  return (
    <section className='mt-10 mb-20 w-11/12 min-h-screen 2xl:w-5/6 mx-auto flex flex-col xl:flex-row lg:space-y-8 xl:space-y-0'>
      <BlogsFilter
        count={filteredList.length}
        categories={categories}
        selected={{ value: selectedCategories, setter: setSelectedCategories }}
      />

      <FilterBlogs list={filteredList} />
    </section>
  );
};

export default BlogsGrid;

export const FilterBlogs = ({ list }: { list: blog[] }) => {
  if (list.length <= 0) {
    return (
      <div className='w-4/5 max-w-xl text-center mx-auto'>
        <p>
          No blogs found in this category. Explore other categories or contact
          us for specific inquiries. Thanks for your interest in Makers
          Engineering Limited!
        </p>
      </div>
    );
  }
  return (
    <div className='w-full h-fit xl:w-4/5 my-40 lg:my-0 grid place-items-center mx-auto gap-56 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
      {list.map(
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
  );
};
