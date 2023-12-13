import { HeadLine } from "@/components";
import { getMovieObject } from "@/utils";
import { MovieProps } from "@/types/movie";
import { VerticalMovieCard } from "@/components/Cards";

interface ListMovieProps {
  data: MovieProps[];
  title: string;
}

const ListMovie = ({ data, title }: ListMovieProps) => {
  return (
    <div className="wide mt-20">
      <HeadLine title={title} isSeeMore={true} />

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5">
        {data?.map((el) => (
          <div
            key={el.id}
            className="snap-center w-[60%] sm:w-[35%] md:w-[25%] lg:w-full flex-shrink-0"
          >
            <VerticalMovieCard {...getMovieObject(el)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
