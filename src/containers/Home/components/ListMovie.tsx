import VerticalMovieCard from "@/components/Cards/VerticalMovieCard";
import HeadLine from "./HeadLine";
import { MovieProps } from "@/types/movie";

interface ListMovieProps {
  data: MovieProps[];
  title: string;
}

const ListMovie = ({ data, title }: ListMovieProps) => {
  return (
    <div className="wide mt-20">
      <HeadLine title={title} isSeparate={false} />

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5">
        {data?.map((el) => (
          <div
            key={el.id}
            className="snap-center w-[60%] sm:w-[35%] md:w-[25%] lg:w-full flex-shrink-0"
          >
            <VerticalMovieCard
              name={el.name}
              year={el.year}
              poster_url={el.poster_url}
              time={el.time}
              slug={el.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
