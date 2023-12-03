import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

import routes from "@/configs/routes";

const Logo = () => {
  return (
    <Link href={routes.home} className="flex items-center gap-3">
      <Image
        src={require("@/assets/images/logo.png")}
        className="w-10 h-10 object-cover rounded-lg"
        alt="logo"
      />

      <span className="text-xl text-text_color font-bold tracking-wider">
        FLASHMOV
      </span>
    </Link>
  );
};

export default memo(Logo);
