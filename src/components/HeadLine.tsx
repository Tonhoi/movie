import { memo } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface HeadlineProps {
  title: string;
  isSeeMore?: boolean;
  containerClassName?: string;
}

const HeadLine = ({ title, isSeeMore = false, containerClassName }: HeadlineProps) => {
  return (
    <div className={twMerge("mt-10 text-white mb-5 flex-between flex-wrap gap-4", containerClassName)}>
      <h2 className="relative lg:text-2xl font-extrabold ml-4">
        {title}

        <div className="absolute top-0 -left-4 bottom-0 w-1 h-full bg-primary" />
      </h2>

      {isSeeMore && (
        <Link
          href="/"
          className="py-1 px-3 bg-secondary text-[10px] lg:text-sm font-bold lg:font-medium hover:opacity-80 transition-base ml-auto rounded-sm"
          prefetch={false}
        >
          XEM THÊM
        </Link>
      )}
    </div>
  );
};

export default memo(HeadLine);
