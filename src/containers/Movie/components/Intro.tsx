import { memo } from "react";
import parse from "html-react-parser";
import { useMeasure } from "react-use";

import { MovieDetail } from "@/types/movie";
import { ImageWithFallback, Modal, Skeleton } from "@/components";

type IntroProps = "sub_docquyen" | "poster_url" | "quality" | "type" | "time" | "lang" | "category" | "content"

const Intro = (props: Pick<MovieDetail, IntroProps>) => {
  const { sub_docquyen, poster_url, quality, type, time, lang, category, content } = props;
  const [ref, {width, height}] = useMeasure<HTMLElement>()

  return (
    <article className="text-white mt-5 flex max-sm:flex-wrap gap-5 lg:w-[65%]">
      <figure ref={ref} className="relative flex-shrink-0 w-[150px] md:w-[170px] lg:w-[208px] lg:max-h-[300px] pt-[200px] lg:pt-[300px]">
        <ImageWithFallback
          src={poster_url}
          alt=""
          width={width}
          height={height}
          className="object-cover rounded-md w-full h-full absolute inset-0 z-10"
        />

        <Skeleton />
      </figure>

      <div className="w-full">
        <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-gray_white">
            {type}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-gray_white">
            {lang}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-gray_white">
            {quality}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-gray_white">
            {time}
          </span>
        </div>

        <div className="my-5">
          <span className="text-gray_white mr-5 md:mr-8 lg:mr-10 text-xs md:max-lg:text-sm">
            Thể loại:
          </span>

          {category?.map((el, idx: number) => (
            <span
              key={idx}
              className="capitalize py-1 px-2 rounded-md inline-block font-normal md:font-light text-[10px] md:text-xs lg:text-sm bg-secondary mr-2"
            >
              {el.name}
            </span>
          ))}

          {sub_docquyen && (
            <span className="capitalize py-1 px-2 rounded-md inline-block font-normal md:font-light text-[10px] md:text-xs lg:text-sm bg-red-600 animate-bounce">
              sub độc quyền
            </span>
          )}
        </div>

        <div className="max-md:text-xs md:text-sm text-gray_white line-clamp-4">
          {content === "" ? "Đang cập nhật...": parse(content)}
        </div>

        <label htmlFor="modal" className="max-md:text-xs md:text-sm text-gray-200 mt-2 hover:text-primary cursor-pointer transition-base underline">Đọc thêm +</label>

        <Modal heading="Mô tả chi tiết">
          <div className="max-md:text-xs md:text-sm text-gray_white">
            {content === "" ? "Đang cập nhật...": parse(content)}
          </div>
        </Modal>
      </div>
    </article>
  );
};

export default memo(Intro);
