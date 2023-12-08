import { useRouter } from "next/router";

import { Loader } from "@/components";
import { TrendingNewsCard, ContentNews } from "@/containers/News";
import { NewsType } from "@/pages/tin-tuc/[slug]";

const News = ({ initData }: NewsType) => {
  const { isFallback } = useRouter();

  if (isFallback) return <Loader />;

  return (
    <div className="wide mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,400px] gap-5 text-white">
        <div>
          <ContentNews content={initData.content} title={initData.title} />
        </div>

        <div className="border-t-[1px] lg:border-t-0 lg:border-l-[1px] border-t-[#444444] lg:border-l-[#444444] py-3 px-0 lg:px-4">
          <span className="block text-[#b4b4b4] mb-3 max-lg:text-sm">
            Bài viết phổ biến
          </span>

          <TrendingNewsCard />
        </div>
      </div>
    </div>
  );
};

export default News;
