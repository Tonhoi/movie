import { useCallback, useEffect, useMemo, useState } from "react";
import { get } from "lodash";
import { useLocalStorage } from "react-use";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

import { Skeleton } from "@/components";
import { SERVERS } from "@/containers/Movie";

const WatchMovie = ({ episodes, name, view, episode_total }: any) => {
  const episode = get(episodes, "[0]");
  const [value, setValue] = useLocalStorage("current_episode", 0);
  const [server, setServer] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Reset Lại tập phim về 0 khi người dùng rời khỏi trang xem phim
      setValue(0);
    };

    // Lắng nghe sự kiện khi route thay đổi
    router.events.on("routeChangeStart", handleRouteChange);

    // Cleanup sự kiện khi component bị unmount
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  const handleChangeEpisode = useCallback((slug: number) => {
    setValue(slug - 1);
  }, []);

  const handleChangeServer = useCallback((base_url: string) => {
    setServer(base_url);
  }, []);

  const serverMemo = useMemo(() => {
    if (server !== "" && server !== undefined) {
      return server + episode.server_data[value as number]?.link_m3u8;
    } else {
      return episode.server_data[value as number]?.link_embed;
    }
  }, [server, value]);

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

      <div className="text-white mb-5 lg:mb-10 mt-2 lg:order-3">
        <i className="block text-xs lg:text-sm mb-3 text-[#b3b3b3] text-center">
          Vui lòng đổi server nếu không xem được
        </i>
        <h1 className="text-base lg:text-xl font-bold">{name}</h1>
        <span className="text-xs lg:text-sm text-[#b4b4b4]">
          {view} lượt xem
        </span>

        <div className="my-4">
          {SERVERS.map((el, idx: number) => (
            <button
              key={idx}
              className={twMerge(
                "py-1.5 px-4 rounded-sm bg-secondary mr-3 text-[10px] font-medium lg:text-sm lg:font-light cursor-pointer hover:bg-primary transition-base",
                server === el.base_url && "bg-primary animate-pulse"
              )}
              onClick={() => handleChangeServer(el.base_url)}
            >
              {el.title}
            </button>
          ))}
        </div>
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 px-1 overflow-y-auto rounded-md lg:h-[500px]">
        <div className="flex-between bg-transparent backdrop-blur-md sticky top-0 z-10 flex-wrap">
          <div className="text-xs lg:text-sm px-2 py-2">
            Tổng số: {episode_total}
          </div>

          <div className="text-xs lg:text-sm ml-auto py-2 px-2 cursor-pointer hover:opacity-80 transition-base">
            Phần 1
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3 flex-wrap">
          {episode?.server_data.length > 1 &&
            episode?.server_data.map((el:any, idx: number) => (
              <button
                key={idx}
                onClick={() => handleChangeEpisode(el.slug)}
                className={twMerge(
                  "py-1.5 px-2 bg-secondary text-center cursor-pointer hover:bg-primary transition-base rounded-sm font-light text-xs lg:text-sm",
                  el.slug - 1 === value && "bg-primary"
                )}
              >
                Tập {el.name}
              </button>
            ))}

          {episode?.server_data.length <= 1 && (
            <button
              disabled
              className="py-1.5 px-2 text-center bg-primary transition-base rounded-sm font-light text-xs lg:text-sm"
            >
              Tập Full
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
