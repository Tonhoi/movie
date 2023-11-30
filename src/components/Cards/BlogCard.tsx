import { ImageWithFallback } from "@/components";
import Link from "next/link";

interface BolgCardProps {
  poster_url: string;
  modified_time: string;
}

const BlogCard = ({ poster_url, modified_time }: BolgCardProps) => {
  return (
    <Link href={"/"} className="max-h-[450px] group cursor-pointer">
      <ImageWithFallback
        alt=""
        width={400}
        height={200}
        src={poster_url}
        className="object-cover rounded-t-md w-full max-h-[230px]"
      />

      <div className="bg-[#111111] py-7 px-5 rounded-b-2xl overflow-hidden">
        <div className="flex-between text-[#b4b4b4] mb-1">
          <p>{modified_time}</p>
          <p>Anime</p>
        </div>

        <h2 className="line-clamp-2 text-base lg:text-2xl font-extrabold text-white mb-1.5 lg:mb-4 group-hover:text-primary">
          Tokyo Ghoul 2nd Season Review
        </h2>

        <p className="line-clamp-3 text-[#b4b4b4] text-sm lg:text-base">
          List những bộ phim ngôn tình Trung Quốc lãng mạn sẽ khiến tâm hồn bạn
          trở nên ngọt ngào. Tham khảo ngay top phim tình cảm Trung Quốc đã được
          phimmoi liệt kê bên dưới nhé! Thầm
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
