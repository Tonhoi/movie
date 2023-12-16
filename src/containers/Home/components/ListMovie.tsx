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

      <div className="scroll-snap-container lg:grid lg:grid-cols-6">
        {data?.map((el) => (
          <div key={el.id} className="scroll-snap-item">
            <VerticalMovieCard {...getMovieObject(el)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMovie;
