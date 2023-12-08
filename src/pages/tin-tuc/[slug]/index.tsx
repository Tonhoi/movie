import { apis } from "@/configs";
import News from "@/containers/News";
import { useFetch as UseFetch } from "@/hooks";
import { IPage, MovieProps, NewsProps, responseSchema } from "@/types/movie";

type params = {
  params: {
    slug: string;
  };
};

export type NewsType = { initData: NewsProps };

const index = (props: NewsType) => {
  return <News {...props} />;
};

export const getStaticPaths = async () => {
  try {
    const resNews = await UseFetch(apis["news"]);

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
    const resTrendingMovie = await UseFetch(`tin-tuc/${params.slug}`);

    return {
      props: {
        initData: resTrendingMovie,
        fallback: true,
        revalidate: 60,
      },
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
