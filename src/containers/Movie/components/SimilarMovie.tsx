import { memo } from "react";

import { getMovieObject } from "@/utils";
import { MovieProps } from "@/types/movie";
import { VerticalMovieCard } from "@/components/Cards";

interface SimilarMovieProps {
  data: MovieProps[];
}

const SimilarMovie = ({ data }: SimilarMovieProps) => {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5 lg:max-w-[65%]">
      {data?.map((el) => (
        <div
          key={el.id}
          className="snap-center w-[40%] sm:w-[25%] md:w-[20%] lg:w-full flex-shrink-0"
        >
          <VerticalMovieCard {...getMovieObject(el)} />
        </div>
      ))}
    </div>
  );
};

export default memo(SimilarMovie);
