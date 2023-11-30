import { Settings } from "react-slick";

import ChevronForwardIcon from "@/assets/Icons/ChevronForwardIcon";
import { ArrowProps } from "@/types/swiper";

const NextArrow = ({ onClick }: Partial<ArrowProps>) => {
  return (
    <ChevronForwardIcon
      className="absolute right-0 xl:right-5 z-20 text-white top-1/2 -translate-y-1/2 w-10 h-10 font-bold cursor-pointer hover:opacity-80 transition-base opacity-0 group-hover:opacity-100 hidden lg:block"
      onClick={onClick}
    />
  );
};

const PrevArrow = ({ onClick }: Partial<ArrowProps>) => {
  return (
    <ChevronForwardIcon
      className="absolute left-0 xl:left-5 z-20 text-white top-1/2 -translate-y-1/2 rotate-180 w-10 h-10 font-bold cursor-pointer hover:opacity-80 transition-base opacity-0 group-hover:opacity-100 hidden lg:block"
      onClick={onClick}
    />
  );
};

export const settings: Settings = {
  fade: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
