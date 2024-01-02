import { apis } from "@/configs";
import News from "@/containers/News";
import { useFetch as UseFetch } from "@/hooks";
import { IPage, NewsProps, responseSchema } from "@/types/movie";

export type NewsType = IPage<[responseSchema<NewsProps>]>;

const index = (props: NewsType) => {
  return <News {...props} />;
};

export const getStaticProps = async () => {
  try {
    const resNews = await UseFetch(apis["news"]);

    return {
      props: {
        initData: [resNews],
        fallback: true,
        revalidate: 3600,
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
