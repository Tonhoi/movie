import parse from "html-react-parser";

import { ImageWithFallback } from "@/components";

const Intro = (props: any) => {
  const { sub_docquyen, poster_url, quality, type, time, lang, category, content } = props;

  return (
    <div className="text-white mt-5 flex flex-wrap sm:flex-nowrap gap-5 w-full lg:w-[65%]">
      <ImageWithFallback
        src={poster_url}
        alt=""
        width={208}
        height={312}
        className="object-cover rounded-md flex-shrink-0 w-[184px] sm:w-[208px] lg:max-h-[300px]"
      />

      <div className="w-full">
        <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">
            {type}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">
            {lang}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">
            {quality}
          </span>
          <span className="py-1 px-2 rounded-md font-normal md:font-light text-[10px] md:text-xs lg:text-sm border-[1px] border-solid border-secondary text-[#b4b4b4]">
            {time}
          </span>
        </div>

        <div className="my-5">
          <span className="text-[#b4b4b4] mr-5 md:mr-8 lg:mr-10 text-xs md:text-sm lg:text-base">
            Thể loại:
          </span>

          {category.map((el:any, idx: number) => (
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

        <div className="text-xs md:text-sm lg:text-base text-[#b4b4b4]">
          {parse(content)}
        </div>
      </div>
    </div>
  );
};

export default Intro;
