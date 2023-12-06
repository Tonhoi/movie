import { TrendingBlogCard, ContentBlog } from "@/containers/Blog";

const Blog = () => {
  return (
    <div className="wide mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-5 text-white">
        <div>
          <ContentBlog />
        </div>

        <div className="border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-t-[#444444] lg:border-l-[#444444] py-3 px-0 lg:px-4">
          <span className="block text-[#b4b4b4] mb-3 text-sm lg:text-base">
            Bài viết phổ biến
          </span>

          <TrendingBlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
