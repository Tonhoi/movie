import { Comments, Intro, WatchMovie } from "@/containers/Movie";
import { get } from "lodash";
import { useRouter } from "next/router";

const Movie = (props: any) => {
  const { isFallback } = useRouter();
  const episodes = get(props.initData, "episodes");
  const movie = get(props.initData, "movie");
  console.log("🚀 ~ file: Movie.tsx:9 ~ Movie ~ movie:", movie)

  if (isFallback) return <div>loading...</div>;

  return (
    <div className="wide">
      <WatchMovie
        episodes={episodes}
        name={movie.name}
        view={movie.view}
        episode_total={movie.episode_total}
      />

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
      <Comments />
    </div>
  );
};

export default Movie;
