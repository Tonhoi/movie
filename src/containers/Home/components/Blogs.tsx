import { BlogCard } from "@/components/Cards";
import { HeadLine } from "@/containers/Home";
import { BlogProps } from "@/types/movie";

interface props {
  data: BlogProps[];
}

const Blogs = ({ data }: props) => {
  return (
    <div className="wide mt-20">
      <HeadLine title="Tin tức" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((el: BlogProps) => (
          <BlogCard
            key={el.id}
            poster_url={el.poster_url}
            date={el.date}
            content={el.content}
            title={el.title}
            movie_type={el.movie_type}
            slug={el.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
