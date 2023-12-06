import { memo, Fragment } from "react";

import { Time } from "@/containers/Blog";

const ContentBlog = () => {
  return (
    <Fragment>
      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold !leading-[1.2] mb-5">
        Top 12 phim ngôn tình Trung Quốc hay không nên bỏ qua
      </h1>

      <Time />

      <div className="blog-content mt-1">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur,
          ipsum fugiat tenetur harum, unde perspiciatis dolorum dolore labore
          consequatur aperiam eligendi error optio aliquid, magnam sunt? Esse
          inventore cum aliquam?
        </p>
      </div>
    </Fragment>
  );
};

export default memo(ContentBlog);
