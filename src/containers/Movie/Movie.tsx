import { get } from "lodash";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { getSeoObject } from "@/utils";
import { HeadLine, Loader, SEO } from "@/components";
import { MovieType } from "@/pages/phim/[slug]/[episode]";
import { AiringToday, Comments, Intro, SimilarMovie, WatchMovie } from "@/containers/Movie";

const Movie = ({ initData }: MovieType) => {
  const router = useRouter();
  
  const episodes = get(initData, [0, "episodes"]);
  const movie = get(initData, [0, "movie"]);
  const seoOnPage = get(initData, [0, "seoOnPage"]);
  const airingToday = get(initData, [1, "data"]);
  const similarMovie = get(initData, [2, "data"]);
  
  if (router.isFallback) return <Loader />;

  return (
    <Fragment>
      {/* SEO */}
      <SEO {...getSeoObject(seoOnPage)} />

      <div className="wide">
        <WatchMovie episodes={episodes} name={movie.name} view={movie.view} status={movie.status} trailer_url={movie.trailer_url} lang={movie.lang} type={movie.type} />

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

        <HeadLine title="Có thể bạn quan tâm" />
        <SimilarMovie data={similarMovie} />

        <HeadLine title="Hôm nay xem gì 🤔" />
        <AiringToday data={airingToday} />
      </div>
    </Fragment>
  );
};

export default Movie;
