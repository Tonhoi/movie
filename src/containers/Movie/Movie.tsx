import { useRouter } from "next/router";
import { get } from "lodash";

import { Loader } from "@/components";
import { AiringToday, Comments, Intro, WatchMovie } from "@/containers/Movie";
import { MovieType } from "@/pages/phim/[slug]";

const Movie = ({ initData }: MovieType) => {
  const { isFallback } = useRouter();
  const episodes = get(initData, [0, "episodes"]);
  const movie = get(initData, [0, "movie"]);
  const airingToday = get(initData, [1, "data"]);

  if (isFallback) return <Loader />;

  return (
    <div className="wide">
      <WatchMovie episodes={episodes} name={movie.name} view={movie.view} />

      <Intro
        sub_docquyen={movie.sub_docquyen}
        poster_url={movie.poster_url}
        quality={movie.quality}
        type={movie.type}
        time={movie.time}
        lang={movie.lang}
        category={movie.category}
        content={movie.content}
      />

      <Comments movie={movie} />
      <AiringToday data={airingToday} />
    </div>
  );
};

export default Movie;
