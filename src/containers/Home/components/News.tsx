import { HeadLine } from "@/components";
import { NewsProps } from "@/types/movie";
import { NewsCard } from "@/components/Cards";

interface props {
  data: NewsProps[];
}

const News = ({ data }: props) => {
  return (
    <div className="wide mt-20">
      <HeadLine title="Tin tức" isSeeMore />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((el: NewsProps, idx) => (
          <NewsCard
            key={idx}
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

export default News;
