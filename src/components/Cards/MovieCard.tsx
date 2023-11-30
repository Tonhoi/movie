import Link from "next/link";

import PlayCircleIcon from "@/assets/Icons/PlayCircleIcon";
import { ImageWithFallback } from "@/components";

const MovieCard = () => {
  return (
    <div>
      <div className="relative cursor-pointer group">
        <ImageWithFallback
          alt=""
          src="https://img.ophim9.cc/uploads/movies/cam-tu-thumb.jpg"
          className="rounded-lg object-cover w-full"
          width={400}
          height={400}
        />

        <p className="uppercase absolute bottom-1 left-1 py-[5px] px-[10px] bg-primary text-xs font-extrabold text-white">
          FULL 12/12
        </p>

        <Link
          href={"/"}
          className="absolute inset-0 w-full bg-[#000000b3] opacity-0 group-hover:opacity-100 transition-base flex-center text-white text-base lg:text-lg xl:text-2xl font-extrabold rounded-lg"
        >
          <PlayCircleIcon className="text-white w-10 h-10 mr-1" />
          XEM NGAY
        </Link>
      </div>

      <h3 className="text-white text:base xl:text-xl font-medium cursor-pointer hover:text-primary mt-4">
        Tết Ở Làng Địa Ngục
      </h3>

      <span className="text-[#b4b4b4] text-sm xl:text-base">2023</span>
    </div>
  );
};

export default MovieCard;
