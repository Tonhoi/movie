import { memo, useCallback } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

interface HeadlineProps {
  title: string;
  isSeeMore?: boolean;
  containerClassName?: string;
  href?: string;
}

const HeadLine = ({
  title,
  isSeeMore = false,
  containerClassName,
  href = "",
}: HeadlineProps) => {
  const { push } = useRouter();

  const handleNavigate = useCallback(() => {
    push(href, undefined, { shallow: true });
  }, []);

  return (
    <div
      className={twMerge(
        "mt-10 text-white mb-5 flex-between flex-wrap gap-4",
        containerClassName
      )}
    >
      <h2 className="relative lg:text-2xl font-extrabold ml-4">
        {title}

        <div className="absolute top-0 -left-4 bottom-0 w-1 h-full bg-primary" />
      </h2>

      {isSeeMore && (
        <button
          className="py-1 px-3 bg-secondary text-[10px] lg:text-sm font-bold lg:font-medium hover:opacity-80 transition-base ml-auto rounded-sm"
          onClick={handleNavigate}
        >
          XEM THÊM
        </button>
      )}
    </div>
  );
};

export default memo(HeadLine);
