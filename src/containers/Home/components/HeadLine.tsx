import Link from "next/link";

interface HeadlineProps {
  isSeparate?: boolean;
  title: string;
}

const HeadLine = ({ isSeparate = true, title }: HeadlineProps) => {
  return (
    <div className="mt-10 text-white mb-5 flex-between flex-wrap gap-4">
      {isSeparate && (
        <div className="absolute -top-[calc(50%+35px)] left-0 w-full h-px bg-[rgba(255,255,255,.15)]" />
      )}

      <h2 className="relative lg:text-2xl font-extrabold ml-4">
        {title}

        <div className="absolute top-0 -left-4 bottom-0 w-1 h-full bg-primary" />
      </h2>

      <Link
        href={"/"}
        className="py-1 px-3 bg-secondary text-[10px] lg:text-sm font-bold lg:font-medium hover:opacity-80 transition-base ml-auto rounded-sm"
      >
        XEM THÊM
      </Link>
    </div>
  );
};

export default HeadLine;
