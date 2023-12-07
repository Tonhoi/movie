import { AiringToday, Comments, Intro, WatchMovie } from "@/containers/Movie";
import { get } from "lodash";
import { useRouter } from "next/router";

const Movie = ({ initData }: any) => {
  const { isFallback } = useRouter();
  const episodes = get(initData, "[0].episodes");
  const movie = get(initData, "[0].movie");
  const airingToday = get(initData, "[1].data");

  if (isFallback) return <div>loading...</div>;

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

      {/* <Comments /> */}
      {/* <AiringToday data={airingToday} /> */}
    </div>
  );
};

export default Movie;
