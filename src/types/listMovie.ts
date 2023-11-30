export interface listMovie {
  category: Array<{
    name: string;
  }>;
  content: string;
  id: string;
  lang: string;
  modified_time: string;
  name: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  showtimes: string;
  slug: string;
  status: string;
  sub_docquyen: boolean;
  thumb_url: string;
  time: string;
  type: "single" | "series";
  year: string;
}
