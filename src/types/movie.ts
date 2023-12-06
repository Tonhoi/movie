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

export interface link {
  first: string;
  last: string;
  next: string;
  prev: string;
}

export interface meta {
  current_page: number;
  from: number;
  last_page: number;
  links: {
    active: boolean;
    label: string;
    url: string;
  }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
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
  created: {
    time: Date;
  };
  modified: {
    time: Date;
  };
  _id: string;
  name: string;
  slug: string;
  origin_name: string;
  content: string;
  type: string;
  status: string;
  thumb_url: string;
  poster_url: string;
  is_copyright: boolean;
  sub_docquyen: boolean;
  chieurap: boolean;
  trailer_url: string;
  time: string;
  episode_current: string;
  episode_total: string;
  quality: string;
  lang: string;
  notify: string;
  showtimes: string;
  year: number;
  view: number;
  actor: string[];
  director: string[];
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  country: {
    id: string;
    name: string;
    slug: string;
  }[];
  episodes: {
    server_name: string;
    server_data: Episode[];
  }[];
}

export interface BlogProps {
  id: string;
  title: string;
  poster_url: string;
  content: string;
  movie_type: "series" | "single";
  date: string;
  slug: string;
}
