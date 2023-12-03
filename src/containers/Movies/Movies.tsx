import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { useToggle, useFetch } from "@/hooks";
import { VerticalMovieCard, HorizontalMovieCard } from "@/components/Cards";
import { Heading, Filter } from '@/containers/Movies'
import { MovieProps } from "@/types/movie";

const Movies = () => {
  const { toggleOff, toggleOn, on } = useToggle();
  const { query } = useRouter()

  const { data: tredingMovies }: UseQueryResult = useQuery({
    queryKey: ["trending_movie", query.year],
    queryFn: () => useFetch(`movies/trending?year=${query.year}`),
  });

  return (
    <div className="wide text-white mt-8 flex-1">
      <Heading />

      <Filter on={on} toggleOff={toggleOff} toggleOn={toggleOn} />

      {/* show list movie */}
      <div className={twMerge("grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-20 gap-x-6 gap-y-8", on && "grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3")}>
        {(tredingMovies as MovieProps[])?.map((el:any, idx: number) => {
            if(!on) return <VerticalMovieCard key={idx} poster_url={el.poster_url} name={el.name} time={el.time} year={el.year} />

            else return <HorizontalMovieCard key={idx} poster_url={el.poster_url} name={el.name} year={el.year} sub_docquyen={el.sub_docquyen} category={el.category} />
            
          })}
      </div>
    </div>
  );
};

export default Movies;
