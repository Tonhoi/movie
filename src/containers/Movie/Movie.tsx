import { get } from "lodash";
import { useRouter } from "next/router";
import { useLocalStorage } from "react-use";
import { Fragment, useEffect } from "react";

import { getSeoObject } from "@/utils";
import { MovieType } from "@/pages/phim/[slug]";
import { HeadLine, Loader, SEO } from "@/components";
import { AiringToday, Comments, Intro, SimilarMovie, WatchMovie } from "@/containers/Movie";

const Movie = ({ initData }: MovieType) => {
  const [_currentEpisode, setCurrentEpisode] = useLocalStorage("current_episode", 1);

  const router = useRouter();
  const episodes = get(initData, [0, "episodes"]);
  const movie = get(initData, [0, "movie"]);
  const seoOnPage = get(initData, [0, "seoOnPage"])
  const airingToday = get(initData, [1, "data"]);
  const similarMovie = get(initData, [2, "data"]);
  
  useEffect(() => {
    const handleRouteChange = () => {
      // Reset Lại tập phim về 1 khi người dùng rời khỏi trang xem phim
      setCurrentEpisode(1);
    };

    // Lắng nghe sự kiện khi route thay đổi
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);
  
  if (router.isFallback) return <Loader />;

  return (
    <Fragment>
      {/* SEO */}
      <SEO {...getSeoObject(seoOnPage)} />

      <div className="wide">
        <WatchMovie episodes={episodes} name={movie.name} view={movie.view} status={movie.status} trailer_url={movie.trailer_url} />

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
