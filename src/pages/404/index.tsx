import Link from "next/link";
import { Fragment } from "react";

import { routes } from "@/configs";
import Head from "next/head";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>404</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-center flex-col text-white">
        <div className="text-9xl font-bold">
          4<span className="text-primary">0</span>4
        </div>

        <h3 className="text-xl md:text-3xl my-1 font-bold">
          Oops! Trang không tồn tại 😓
        </h3>

        <Link
          href={routes.home}
          className="py-2.5 px-6 mt-4 rounded-full font-bold text-white bg-primary hover:opacity-80 transition-base"
        >
          👉 Trang chủ
        </Link>
      </div>
    </Fragment>
  );
};

export default index;
