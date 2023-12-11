import { get } from "lodash";
import { twMerge } from "tailwind-merge";
import { useLocalStorage } from "react-use";
import { memo, useCallback, useMemo, useState } from "react";

import { Skeleton } from "@/components";
import { MovieDetail } from "@/types/movie";
import { SERVERS } from "@/containers/Movie";

type WatchMovieProps = Pick<MovieDetail, "episodes" | "name" | "view" | "trailer_url" | "status">

const WatchMovie = ({ episodes, name, view, status, trailer_url }: WatchMovieProps) => {
  const episode = get(episodes, [0]);
  const isVisibleTrailer = status === "trailer";

  const [currentEpisode, setCurrentEpisode] = useLocalStorage("current_episode", 1);
  const [server, setServer] = useState("");

  const handleChangeEpisode = useCallback((idx: number) => {
    setCurrentEpisode(idx);
  }, []);

  const handleChangeServer = useCallback((base_url: string) => {
    setServer(base_url);
  }, []);

  const renderEpisode = useMemo(() => {
    if (episode == undefined) return null;

    return episode.server_data.map((_el, idx: number) => (
      <button
        key={idx}
        onClick={() => handleChangeEpisode(idx + 1)}
        className={twMerge(
          "py-1.5 px-2 text-center cursor-pointer hover:bg-secondary hover:text-white border-[1px] text-[#b4b4b4] border-secondary transition-base rounded-md max-lg:font-medium text-xs lg:text-sm",
          idx + 1 === currentEpisode && "bg-secondary text-white cursor-default"
        )}
      >
        {isVisibleTrailer ? "Trailer" : episode.server_data.length <= 1 ? "Tập Full" : `Tập ${idx + 1}`}
      </button>
    ));
  }, [episode, currentEpisode]);

  const embed = useMemo(() => {
    if (currentEpisode == undefined) return null;
    if (!episode.server_data) return null;
    if (isVisibleTrailer) {
      const idVideoMatch = trailer_url.match(/(?:\?|&)v=([^&]+)/);

      if (!idVideoMatch) return null;
      return `https://www.youtube.com/embed/${idVideoMatch[1]}`;
    }

    if (server !== "" && server !== undefined) return server + episode.server_data[currentEpisode - 1].link_m3u8;
    else return episode.server_data[currentEpisode - 1].link_embed;
  }, [server, currentEpisode, episode]);

  const renderServer = useMemo(() => {
    return SERVERS.map((el, idx: number) => (
      <button
        key={idx}
        onClick={() => handleChangeServer(el.base_url)}
        className={twMerge(
          "py-1.5 px-4 rounded-md border-[1px] border-secondary mr-3 text-[10px] font-medium lg:text-sm lg:font-light cursor-pointer hover:bg-secondary transition-base",
          server === el.base_url &&
            "bg-secondary animate-pulse disabled cursor-default"
        )}
      >
        {el.title}
      </button>
    ));
  }, [server]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[65%,35%] gap-3">
      <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={embed as string}
          allowFullScreen
          className="relative z-10"
        />

        <Skeleton />
      </div>

      <div className="text-white mt-2 mb-5 lg:mb-10 lg:order-3">
        <i className="block text-xs lg:text-sm mb-3 text-[#b4b4b4] text-center">
          Vui lòng đổi server nếu không xem được
        </i>

        <h1 className="lg:text-xl font-bold">
          {name} - {isVisibleTrailer ? "trailer" : `tập ${currentEpisode}`}
        </h1>

        <span className="text-xs lg:text-sm text-[#b4b4b4]">
          {view?.toLocaleString()} lượt xem
        </span>

        {!isVisibleTrailer && <div className="my-4">{renderServer}</div>}
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 overflow-y-auto rounded-md md:max-lg:max-h-80 lg:h-[500px]">
        <div className="sticky top-0 z-10 text-xs lg:text-sm py-2 px-3 bg-transparent backdrop-blur-md">
          Tổng số: {episode.server_data.length} tập
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 px-3">
          {renderEpisode}
        </div>
      </div>
    </div>
  );
};

export default memo(WatchMovie);
