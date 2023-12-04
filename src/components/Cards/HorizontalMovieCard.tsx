import { ImageWithFallback } from "@/components";
import { Category, MovieProps } from "@/types/movie";
import { useRouter } from "next/router";

type PickMoveProps = "name" | "year" | "poster_url" | "category" | "sub_docquyen" | "slug";

const HorizontalMovieCard = (props: Pick<MovieProps, PickMoveProps>) => {
  const { name, year, poster_url, category, sub_docquyen, slug } = props;
  const { push } = useRouter()

  const handleNavigation = () => {
    push(`/phim/${slug}`, undefined, { shallow: true })
  }
  return (
    <article className="group flex rounded-md overflow-hidden transition-base cursor-pointer text-white hover:bg-black bg-[#111111]" onClick={handleNavigation}>
      <ImageWithFallback
        alt={name}
        src={poster_url}
        width={80}
        height={120}
        className="object-cover"
      />

      <div className="p-4 relative w-full">
        <h3 className="mb-2 font-medium line-clamp-2 group-hover:text-primary transition-base">
          {name}
        </h3>

        <span className="absolute top-0 right-0 bg-secondary py-1 px-2 rounded-bl-md text-[10px] lg:text-xs font-medium">
          {year}
        </span>

        <div className="flex items-center flex-wrap gap-1.5">
          {category.map((category: Category, idx: number) => (
            <span
              key={idx}
              className="py-0.5 px-2 border-[1px] lg:border-2 border-primary text-[10px] lg:text-xs font-medium rounded-[4px]"
            >
              {category.name}
            </span>
          ))}

          {sub_docquyen && (
            <span className="py-0.5 px-2 bg-red-600 animate-bounce text-[10px] lg:text-xs font-medium rounded-[4px]">
              Sub độc quyền
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default HorizontalMovieCard;
