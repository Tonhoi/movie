export interface PaginationProps {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
  totalPages: number;
}

interface IPage<T extends unknown[]> {
  initData: T;
  fallback: {
    [key: string]: any;
  };
  revalidate: number;
}


type responseSchema<T> = {
  pagination: Array<PaginationProps>;
  data: T[];
};

export type { IPage, responseSchema };

export interface MovieProps {
  category: Array<Category>;
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

export interface Category {
  name: string;
  slug: string;
}

export interface Episode {
  name: string;
  slug: string;
  filename: string;
  link_embed: string;
  link_m3u8: string;
}

export interface MovieDetail {
  actor: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  content: string;
  country: {
    id: string;
    name: string;
    slug: string;
  }[];
  director: string[];
  episode_current: string;
  episode_total: string;
  id: string;
  is_copyright: boolean;
  lang: string;
  modified_time: string;
  name: string;
  notify: string;
  origin_name: string;
  poster_url: string;
  quality: string;
  showtimes: string;
  slug: string;
  status: string;
  sub_docquyen: boolean;
  thumb_url: string;
  time: string;
  trailer_url: string;
  type: string;
  view: number;
  year: number;

  episodes: {
    server_name: string;
    server_data: Episode[];
  }[];
}

export interface NewsProps {
  id: string;
  title: string;
  poster_url: string;
  content: string;
  movie_type: "series" | "single";
  date: string;
  slug: string;
}
