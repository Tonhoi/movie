import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

import { Skeleton } from "@/components";
import { MovieDetail } from "@/types/movie";
import { BASE_EMBED } from "@/containers/Movie";

type WatchMovieProps = Pick<MovieDetail, "episodes" | "name" | "view" | "trailer_url" | "status" | "lang"> & {
  episodeCurrent: {
    link_m3u8: string;
    slug: string;
    sources: {
      link_embed: string;
      server_name: string;
    }[]
  }
}

const WatchMovie = ({ episodes, name, view, status, trailer_url, lang, episodeCurrent }: WatchMovieProps) => {
  const isVisibleTrailer = status === "trailer";
  const { push, pathname, query } = useRouter()
  
  const [sources, setSources] = useState({
    server_name: episodeCurrent.sources[0]?.server_name,
    link_embed: episodeCurrent.sources[0]?.link_embed
  });

  useEffect(() => {
    setSources(episodeCurrent.sources[0])
  }, [episodeCurrent])

  const handleChangeEpisode = useCallback((slug: string) => {
    if(query.episode === slug || isVisibleTrailer) return null

    push({pathname, query: {...query, episode: slug}}, undefined)
  }, [query]);

  const handleChangeServer = useCallback((sources: { server_name: string; link_embed: string }) => {
    setSources(sources);
  }, [sources]);

  const renderEpisode = useMemo(() => {
    if (episodes == undefined) return null;

    return episodes.map((item: any, idx: number) => (
      <button
        key={idx}
        onClick={() => handleChangeEpisode(item.slug)}
        className={twMerge(
          "py-1.5 px-2 text-center cursor-pointer hover:bg-secondary hover:text-white text-gray_white bg-[#303030] transition-base rounded-md max-lg:font-medium text-xs lg:text-sm",
          (item.slug === query.episode || isVisibleTrailer) && "bg-secondary text-white cursor-default"
        )}
      >
        {isVisibleTrailer ? "Trailer" : item.slug.replace("tap-", "tập ")}
      </button>
    ));
  }, [episodes, query]);

  const embed = useMemo(() => {
    if (isVisibleTrailer) {
      const idVideoMatch = trailer_url.match(/(?:\?|&)v=([^&]+)/);

      if (!idVideoMatch) return null;
      return BASE_EMBED + idVideoMatch[1]
    }

    return sources.link_embed
  }, [sources, episodes, query, episodeCurrent]);

  const renderServer = useMemo(() => {
    return episodeCurrent.sources?.map((item: any, idx: number) => (
      <button
        key={idx}
        onClick={() => handleChangeServer({server_name: item.server_name, link_embed:item.link_embed})}
        className={twMerge(
          "py-1.5 px-4 rounded-md bg-[#303030] mr-3 text-[10px] font-medium lg:text-sm lg:font-light cursor-pointer hover:bg-secondary transition-base",
          sources.server_name === item.server_name && "bg-secondary animate-pulse disabled cursor-default"
        )}
      >
        {item.server_name}
      </button>
    ));
  }, [sources]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[65%,35%] gap-3">
      <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
        <iframe
          key={embed}
          width="100%"
          height="100%"
          src={embed as string}
          allowFullScreen
          title={name}
          className="relative z-10"
        />

        <Skeleton />
      </div>

      <div className="text-white mt-2 mb-5 lg:mb-10 lg:order-3">
        <i className="block text-xs lg:text-sm mb-3 text-gray_white text-center">
          Vui lòng đổi server hoặc tải lại trang nếu không xem được
        </i>

        <h1 className="lg:text-xl font-bold">
          {name} - {isVisibleTrailer ? "trailer" : `${(query.episode as string).replace("tap", "Tập").replace("-", " ")} (${lang})`}
        </h1>

        <span className="text-xs lg:text-sm text-gray_white">
          {view?.toLocaleString()} lượt xem
        </span>

        {!isVisibleTrailer && <div className="my-4">{renderServer}</div>}
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 overflow-y-auto rounded-md max-lg:max-h-80 lg:h-[500px]">
        <div className="sticky top-0 z-10 text-xs lg:text-sm py-2 px-3 bg-transparent backdrop-blur-md">
          Tổng số: {episodes.length} tập
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 px-3">
          {renderEpisode}
        </div>
      </div>
    </div>
  );
};

export default memo(WatchMovie);