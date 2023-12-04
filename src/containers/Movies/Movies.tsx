import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import { useQuery } from '@tanstack/react-query'

import { useToggle, useFetch as UseFetch } from "@/hooks";
import { VerticalMovieCard, HorizontalMovieCard } from "@/components/Cards";
import { Heading, Filter } from '@/containers/Movies'
import { MovieProps } from "@/types/movie";

const Movies = () => {
  const { toggleOff, toggleOn, on } = useToggle();
  const { query, ...rest } = useRouter()

  const { data: tredingMovies } = useQuery({
    queryKey: ["movie_filter", query.year, query.country, query.category, query.type],
    queryFn: () => 
      UseFetch(`movies/${query?.type}`, {
        params: { 
          year: query?.year,
          country: query?.country,
          category: query?.category,
        }
      }),
    enabled: query.type !== undefined
  });

  return (
    <div className="wide text-white mt-8">
      <Heading />

      <Filter on={on} toggleOff={toggleOff} toggleOn={toggleOn} />

      {/* show list movie */}
      <div className={twMerge("grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-10 lg:mt-20 gap-x-6 gap-y-8", on && "grid-cols-1 sm:!grid-cols-2 lg:!grid-cols-3")}>
        {tredingMovies?.data.map((el:MovieProps, idx: number) => {
            if(!on) return <VerticalMovieCard key={idx} poster_url={el.poster_url} name={el.name} time={el.time} year={el.year} slug={el.slug} />

            else return <HorizontalMovieCard key={idx} poster_url={el.poster_url} name={el.name} year={el.year} sub_docquyen={el.sub_docquyen} category={el.category} slug={el.slug} />
            
          })}
      </div>
        {tredingMovies?.data.length === 0 && (
          <p className="text-white text-xs lg:text-sm font-medium">Không tìm thấy phim phù hợp...</p>   
        )}       
    </div>
  );
};

export default Movies;
