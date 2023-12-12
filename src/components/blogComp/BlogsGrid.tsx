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
  return (
    <section className='mt-10 mb-20 w-11/12 2xl:w-5/6 mx-auto flex flex-col xl:flex-row lg:space-y-8 xl:space-y-0'>
      <BlogsFilter
        count={filteredList.length}
        categories={categories}
        selected={{ value: selectedCategories, setter: setSelectedCategories }}
      />

      <div className='w-full xl:w-4/5 my-40 lg:my-0 grid place-items-center mx-auto gap-56 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-1'>
        {filteredList.map(
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
    </section>
  );
};

export default BlogsGrid;
