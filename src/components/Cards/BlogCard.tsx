import { ImageWithFallback } from "@/components";
import { routes } from "@/configs";
import { BlogProps } from "@/types/movie";
import { useRouter } from "next/router";

const BlogCard = (props: Omit<BlogProps, "id">) => {
  const { poster_url, date, content, title, movie_type, slug } = props;
  const { push } = useRouter()

  const handleNavigation = () => {
    push(`${routes.news}${slug}`)
  }

  return (
    <article className="max-h-[450px] group cursor-pointer" onClick={handleNavigation}>
      <ImageWithFallback
        alt=""
        src={poster_url}
        width={400}
        height={200}
        className="object-cover rounded-t-md w-full max-h-[230px]"
      />

      <div className="bg-[#111111] py-7 px-5 rounded-b-2xl overflow-hidden">
        <div className="flex-between text-[#b4b4b4] mb-1">
          <p className="text-xs lg:text-base">{date}</p>
          <p className="text-xs lg:text-base">
            {movie_type === "series" ? "Phim bộ" : "Phim lẻ"}
          </p>
        </div>

        <h2 className="line-clamp-2 text-sm lg:text-2xl font-extrabold text-white mb-1.5 lg:mb-4 group-hover:text-primary">
          {title}
        </h2>

        <p className="line-clamp-3 text-[#b4b4b4] text-xs lg:text-base">
          {content}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;
