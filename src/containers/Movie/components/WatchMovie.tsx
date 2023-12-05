import { ImageWithFallback, Skeleton } from "@/components";

const WatchMovie = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[65%,35%] gap-3">
      <div className="relative h-[300px] lg:h-[500px] overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://1080.opstream4.com/share/874d0049df81546e041a1d82a75f5046"
          allowFullScreen
          className="relative z-10"
        />

        <Skeleton />
      </div>

      <div className="text-white mt-2 mb-5 lg:mb-0 lg:mt-5 lg:order-3">
        <h1 className="text-base lg:text-xl font-bold">MY DAEMON TẬP 1</h1>
        <span className="text-xs lg:text-sm text-[#b4b4b4]">
          4,750 lượt xem
        </span>
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 px-1 overflow-y-auto rounded-md h-[500px]">
        <div className="flex-between bg-transparent backdrop-blur-md sticky top-0 z-10 flex-wrap">
          <div className="text-xs lg:text-sm px-2 py-2">Tổng số: 10 video</div>

          <div className="text-xs lg:text-sm ml-auto py-2 px-2 cursor-pointer hover:opacity-80 transition-base">
            Phần 1
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {Array(20)
            .fill(null)
            .map((el, idx: number) => (
              <div
                key={idx}
                className="flex gap-3 cursor-pointer py-3 px-2 rounded-md hover:bg-secondary transition-base"
              >
                <ImageWithFallback
                  src="https://img.ophim9.cc/uploads/movies/phuc-ma-chien-si-2-thumb.jpg"
                  alt=""
                  width={106}
                  height={80}
                  className="h-20 w-[100px] object-cover flex-shrink-0 rounded-sm"
                />

                <div>
                  <div className="text-sm line-clamp-2">
                    Tập 1 - Kẻ thách đấu từ Anh
                  </div>
                  <div className="text-xs text-[#b4b4b4] line-clamp-1">
                    5,176 lượt xem
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WatchMovie;
