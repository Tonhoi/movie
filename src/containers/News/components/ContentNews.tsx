import { memo, Fragment } from "react";
import parse from "html-react-parser";
import { Time } from "@/containers/News";

interface ContentNewsProps {
  content: string;
  title: string;
}

const ContentNews = ({ content, title }: ContentNewsProps) => {
  return (
    <Fragment>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold !leading-[1.2] mb-5">
        {title}
      </h1>

      <Time />

      <div className="news-content mt-1">{parse(content)}</div>
    </Fragment>
  );
};

export default memo(ContentNews);
