import { memo } from "react";

import { getMovieObject } from "@/utils";
import { MovieProps } from "@/types/movie";
import { VerticalMovieCard } from "@/components/Cards";

interface SimilarMovieProps {
  data: MovieProps[];
}

const SimilarMovie = ({ data }: SimilarMovieProps) => {
  return (
    <div className="scroll-snap-container lg:grid lg:grid-cols-5 lg:max-w-[65%]">
      {data?.map((el) => (
        <div key={el.id} className="scroll-snap-item">
          <VerticalMovieCard {...getMovieObject(el)} />
        </div>
      ))}
    </div>
  );
};

export default memo(SimilarMovie);
