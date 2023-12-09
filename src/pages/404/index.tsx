import Link from "next/link";

import { routes } from "@/configs";

const index = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-center flex-col text-white">
      <div className="text-9xl font-bold">
        4<span className="text-primary">0</span>4
      </div>

      <h3 className="text-3xl my-1 font-bold">Oops! Trang không tồn tại 😓</h3>

      <Link href={routes.home} className="py-2.5 px-6 mt-4 rounded-full font-bold text-black bg-primary hover:opacity-80 transition-base">👉 Trang chủ</Link>
    </div>
  );
};

export default index;
