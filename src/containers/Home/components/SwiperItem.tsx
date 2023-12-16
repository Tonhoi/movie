import { memo } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import { useMeasure } from "react-use";

import { ImageWithFallback } from "@/components";
import { SwiperCardItemProps } from "@/types/swiper";

const SwiperCardItem = ({ name, origin_name, time, lang, quality, description, slug, type, status, sub_docquyen, poster_url, thumb_url }: SwiperCardItemProps) => {
  const [ref, { width, height }] = useMeasure<HTMLElement>()

  return (
    <div
      className="relative flex-center z-20 bg-center bg-cover bg-no-repeat h-[auto] min-h-[550px] py-8 lg:h-[700px]"
      style={{
        backgroundImage: `url(${thumb_url})`,
      }}
    >
      <div className="absolute inset-0 -z-10 w-full bg-[rgba(0,0,0,0.6)]" />

      <article className="flex wide px-0">
        <div className="text-white px-8 basis-full sm:basis-[80%] lg:basis-[45%]">
          <h2 className="text-3xl mb-5 font-extrabold !leading-[1.25] lg:mb-0 lg:text-6xl xl:text-7xl uppercase line-clamp-2">
            {name}
          </h2>

          <span className="text-xl lg:text-4xl line-clamp-1">
            {origin_name}
          </span>

          <div className="flex items-center gap-3 my-5">
            <span className="px-3 max-lg:text-xs bg-primary rounded-md border-2 border-solid border-primary" />
            <span className="px-3 max-lg:text-xs rounded-md border-2 border-primary" />
          </div>

          <div className="flex items-center gap-3 my-5 flex-wrap">
            <span className="px-3 py-[2px] lg:py-0 max-lg:text-xs bg-secondary rounded-md border-2 border-solid border-secondary">
              {lang}
            </span>

            <span className="px-3 py-[2px] lg:py-0 max-lg:text-xs rounded-md border-2 border-primary">
              {quality}
            </span>

            <span className="px-3 py-[2px] lg:py-0 max-lg:text-xs rounded-md border-2 border-primary">
              {status}
            </span>

            <span className="px-3 py-[2px] lg:py-0 max-lg:text-xs rounded-md border-2 border-primary">
              {type === "series" ? "Phim Bộ" : "Phim Lẻ"}
            </span>

            <div className={`indicator ${!sub_docquyen && "hidden"}`}>
              <span className="indicator-item badge badge-secondary bg-[#e20e01] border-none font-bold text-[10px] lg:text-sm">
                HOT
              </span>
              <span className="px-3 py-[2px] lg:py-0 max-lg:text-xs rounded-md border-2 border-primary">
                Sub Độc Quyền
              </span>
            </div>
          </div>

          <p className="mb-5 lg:text-3xl">{time}</p>

          {description && (
            <div className="mb-3 text-[#d4d4d4] line-clamp-4">
              {parse(description)}
            </div>
          )}

          <Link
            href={`/phim/${slug}`}
            className="block mt-5 text-center hover:bg-[rgba(58,191,238,0.8)] rounded-xl border-2 border-solid border-primary py-1.5 text-xl font-medium max-w-[320px] transition-base w-full lg:py-3 lg:text-4xl"
          >
            XEM NGAY
          </Link>
        </div>

        <figure ref={ref} className="px-8 flex-shrink-0 w-full hidden lg:block lg:basis-[55%] lg:max-w-[746px] lg:h-[600px]">
          <ImageWithFallback
            src={poster_url}
            alt={name}
            width={width}
            height={height}
            className="object-cover rounded-2xl w-full h-full"
          />
        </figure>
      </article>
    </div>
  );
};

export default memo(SwiperCardItem);
