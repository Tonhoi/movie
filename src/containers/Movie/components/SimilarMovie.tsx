import { memo } from "react";

import { VerticalMovieCard } from "@/components/Cards";
import { MovieProps } from "@/types/movie";

interface SimilarMovieProps {
  data: MovieProps[];
}

const SimilarMovie = ({ data }: SimilarMovieProps) => {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto no-scrollbar lg:grid lg:grid-cols-5 lg:max-w-[65%]">
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
            episode_current={el.episode_current}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(SimilarMovie);
