import { useRouter } from "next/router";


import { ImageWithFallback, Skeleton } from "@/components";
import { Category, MovieProps } from "@/types/movie";

type PickMoveProps = "name" | "year" | "poster_url" | "category" | "sub_docquyen" | "slug";

const HorizontalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, category, sub_docquyen, slug } = props;
  const { push } = useRouter()

  const handleNavigation = () => {
    push(`/phim/${slug}`, undefined, { shallow: true })
  }

  return (
    <article className="group flex rounded-md overflow-hidden transition-base cursor-pointer text-white hover:bg-black bg-[#111111]" onClick={handleNavigation}>
      <figure className="relative overflow-hidden flex-shrink-0">
        <ImageWithFallback
          alt={name}
          src={poster_url}
          width={80}
          height={120}
          className="object-cover h-full"
        />

        <Skeleton />
      </figure>

      <div className="py-4 pl-4 pr-10 lg:pr-12 relative w-full">
        <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-base text-xs lg:text-base">
          {name}
        </h3>

        <span className="absolute top-0 right-0 bg-secondary py-1 px-2 rounded-bl-md text-[10px] lg:text-xs font-medium">
          {year}
        </span>

        <div className="flex items-center flex-wrap gap-1.5 overflow-hidden pt-2 max-h-14 sm:max-h-full">
          {sub_docquyen && (
            <span className="capitalize py-0.5 px-2 bg-red-600 animate-bounce text-[10px] lg:text-xs rounded-sm">
              Sub độc quyền
            </span>
          )}

          {category.map((category: Category, idx: number) => (
            <span
              key={idx}
              className="capitalize py-0.5 px-2 border-[1px] lg:border-[1px] border-primary text-[10px] lg:text-xs rounded-sm"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default HorizontalMovieCard;
