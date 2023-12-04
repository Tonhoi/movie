import Image from "next/image";

const WatchMovie = () => {
  return (
    <div className="flex gap-3 h-auto lg:h-[500px] flex-wrap lg:flex-nowrap">
      <div className="w-full">
        <iframe
          width="100%"
          height="100%"
          src="https://1080.opstream4.com/share/874d0049df81546e041a1d82a75f5046"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="text-white border-[1px] border-[#334155] pb-3 px-1 w-full lg:w-2/5 overflow-y-auto rounded-md">
        <div className="flex-between bg-transparent backdrop-blur-md sticky top-0 flex-wrap">
          <div className="text-xs lg:text-sm px-2 py-2">
            Tổng số: 10 video
          </div>

          <div className="text-xs lg:text-sm ml-auto py-2 px-2 cursor-pointer hover:opacity-80 transition-base">
            Phần 1
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
          {Array(20)
            .fill(null)
            .map((el, idx: number) => (
              <div key={idx} className="flex gap-3 cursor-pointer py-3 px-2 rounded-md hover:bg-secondary transition-base">
                <Image
                  src="https://img.ophim9.cc/uploads/movies/phuc-ma-chien-si-2-thumb.jpg"
                  alt=""
                  width={106}
                  height={60}
                  className="h-[60px] w-[106px] object-cover flex-shrink-0 rounded-sm"
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
