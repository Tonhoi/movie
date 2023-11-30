export interface SwiperCardItemProps {
  name: string;
  origin_name: string;
  time: string;
  lang: string;
  quality: string;
  description: string;
  slug: string;
  type: "single" | "series";
  status: string;
  sub_docquyen: boolean;
  poster_url: string;
  thumb_url: string;
}

export interface ArrowProps {
  className: string;
  currentSlide: number;
  ["data-role"]: string;
  onClick: () => void;
  slideCount: number;
  style: any;
}
