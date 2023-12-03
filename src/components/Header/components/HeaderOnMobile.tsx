import { memo } from "react";
import { twMerge } from "tailwind-merge";

import { Search, Nav } from "@/components/Header";

const HeaderOnMobile = ({ showNavMobile }: { showNavMobile: boolean }) => {
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-50 w-full max-w-[320px] bg-base-200 transition-base opacity-0 -translate-x-full overflow-y-auto",
        showNavMobile && "opacity-100 translate-x-0"
      )}
    >
      <div className="py-5">
        <Search inputClassName="max-w-[calc(100%-32px)] mb-5 ml-4" />

        <Nav />
      </div>
    </div>
  );
};

export default memo(HeaderOnMobile);
