import { apis } from "@/configs";
import { useFetch as UseFetch } from "@/hooks";
import { MovieProps, NewsProps } from "@/types/movie";
import NewsDetail from "@/containers/News/components/NewsDetail";

type params = {
  params: {
    slug: string;
  };
};

export type NewsType = { initData: NewsProps };

const index = (props: NewsType) => {
  return <NewsDetail {...props} />;
};

export const getStaticPaths = async () => {
  try {
    const resNews = await UseFetch(apis["news"], { params: { limit: 6 } });

    const paths = resNews.data.map((el: MovieProps) => ({
      params: {
        slug: el.slug,
      },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async ({ params }: params) => {
  try {
    const [resNews, resSimilarNews] = await Promise.all([
      UseFetch(`tin-tuc/${params.slug}`),
      UseFetch(`tin-tuc-tuong-tu/${params.slug}`)
    ])

    return {
      props: {
        initData: [resNews, resSimilarNews],
      },
      revalidate: 180,
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

export default index;
