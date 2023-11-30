import { memo } from "react";
import Link from "next/link";
import parse from "html-react-parser";

import { ImageWithFallback } from "@/components";
import { SwiperCardItemProps } from "@/types/swiper";

const SwiperCardItem = ({
  name,
  origin_name,
  time,
  lang,
  quality,
  description,
  slug,
  type,
  status,
  sub_docquyen,
  poster_url,
  thumb_url,
}: SwiperCardItemProps) => {
  return (
    <div
      className="relative flex-center z-20 bg-center bg-cover bg-no-repeat h-[auto] min-h-[550px] py-8 lg:h-[700px]"
      style={{
        backgroundImage: `url(${thumb_url})`,
      }}
    >
      <div className="absolute inset-0 -z-10 w-full bg-[rgba(0,0,0,0.6)]" />

      <div className="flex max-w-[1300px] mx-auto">
        <div className="text-white px-8 basis-full sm:basis-[80%] lg:basis-[45%]">
          <h2 className="text-4xl mb-5 font-extrabold !leading-[1.25] lg:mb-0 lg:text-6xl xl:text-7xl uppercase line-clamp-2">
            {name}
          </h2>

          <span className="text-2xl lg:text-4xl line-clamp-1">
            {origin_name}
          </span>

          <div className="flex items-center gap-3 my-5">
            <span className="px-3 bg-primary rounded-md border-2 border-solid border-primary" />
            <span className="px-3 rounded-md border-2 border-primary" />
          </div>

          <div className="flex items-center gap-3 my-5 flex-wrap">
            <span className="px-3 bg-priborder-primary rounded-md border-2 border-solid border-primary">
              {lang}
            </span>

            <span className="px-3 rounded-md border-2 border-primary">
              {quality}
            </span>

            <span className="px-3 rounded-md border-2 border-primary">
              {status}
            </span>

            <span className="px-3 rounded-md border-2 border-primary">
              {type === "series" ? "Phim Bộ" : "Phim Lẻ"}
            </span>

            <div className={`indicator ${!sub_docquyen && "hidden"}`}>
              <span className="indicator-item badge badge-secondary bg-[#e20e01] border-none font-bold text-xs lg:text-sm">
                HOT
              </span>
              <span className="px-3 rounded-md border-2 border-primary">
                Sub Độc Quyền
              </span>
            </div>
          </div>

          <p className="text-xl mb-5 lg:text-3xl">{time}</p>

          {description && (
            <div className="mb-3 text-[#d4d4d4] line-clamp-4">
              {parse(description)}
            </div>
          )}

          <Link
            href={slug}
            className="block mt-5 text-center hover:bg-[rgba(58,191,238,0.8)] rounded-xl border-2 border-solid border-primary py-1.5 text-2xl max-w-[320px] transition-base w-full lg:py-3 lg:text-4xl"
          >
            XEM NGAY
          </Link>
        </div>

        <div className="px-8 flex-shrink-0 w-full hidden lg:block lg:basis-[55%]  lg:max-w-[746px] lg:h-[600px]">
          <ImageWithFallback
            src={poster_url}
            className="object-cover rounded-2xl w-full h-full"
            alt={name}
            width={650}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(SwiperCardItem);
