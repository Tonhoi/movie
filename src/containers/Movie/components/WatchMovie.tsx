import { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { useLocalStorage } from "react-use";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

import { Skeleton } from "@/components";
import { SERVERS } from "@/containers/Movie";

const WatchMovie = ({ episodes, name, view }: any) => {
  const episode = get(episodes, "[0]");

  const router = useRouter();

  const [value, setValue] = useLocalStorage("current_episode", 1);
  const [server, setServer] = useState("");

  useEffect(() => {
    const handleRouteChange = () => {
      // Reset Lại tập phim về 0 khi người dùng rời khỏi trang xem phim
      setValue(1);
    };

    // Lắng nghe sự kiện khi route thay đổi
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const handleChangeEpisode = useCallback((slug: number) => {
    setValue(slug);
  }, []);

  const handleChangeServer = useCallback((base_url: string) => {
    setServer(base_url);
  }, []);

  const renderEpisode = useMemo(() => {
    if (episode == undefined) return null;

    if (episode.server_data.length <= 1) {
      return (
        <button
          disabled
          className="py-1.5 px-2 text-center bg-primary transition-base rounded-sm font-light text-xs lg:text-sm"
        >
          Tập Full
        </button>
      );
    } else {
      return episode.server_data.map((el: any, idx: number) => (
        <button
          key={idx}
          onClick={() => handleChangeEpisode(el.slug)}
          className={twMerge(
            "py-1.5 px-2 bg-secondary text-center cursor-pointer hover:bg-primary transition-base rounded-sm font-light text-xs lg:text-sm",
            el.slug == value && "bg-primary"
          )}
        >
          Tập {el.name}
        </button>
      ));
    }
  }, [episode, value]);

  const serverMemo = useMemo(() => {
    if (value == undefined) return null;

    if (server !== "" && server !== undefined) return server + episode.server_data[value - 1]?.link_m3u8;
    else return episode.server_data[value - 1]?.link_embed;
  }, [server, value]);

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
          src={serverMemo}
          allowFullScreen
          className="relative z-10 overflow-hidden"
        />

        <Skeleton />
      </div>

      <div className="text-white mt-2 mb-5 lg:mb-10 lg:order-3">
        <i className="block text-xs lg:text-sm mb-3 text-[#b3b3b3] text-center">
          Vui lòng đổi server nếu không xem được
        </i>

        <h1 className="lg:text-xl font-bold">
          {name} - tập {value}
        </h1>

        <span className="text-xs lg:text-sm text-[#b4b4b4]">
          {view?.toLocaleString()} lượt xem
        </span>

        <div className="my-4">{renderServer}</div>
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 overflow-y-auto rounded-md md:max-lg:max-h-80 lg:h-[500px]">
        <div className="sticky top-0 z-10 bg-transparent backdrop-blur-md">
          <div className="text-xs lg:text-sm py-2 px-3">
            Tổng số: {episode.server_data.length} tập
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3 flex-wrap px-3">
          {renderEpisode}
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
