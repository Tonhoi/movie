import { twMerge } from "tailwind-merge";

import HeaderSearch from "./HeaderSearch";
import NavItem from "./NavItem";

const HeaderOnMobile = ({ showNavMobile }: { showNavMobile: boolean }) => {
  return (
    <div
      className={twMerge(
        "fixed inset-0 z-50 w-full max-w-[320px] min-h-screen bg-base-200 transition-base opacity-0 -translate-x-full overflow-y-auto",
        showNavMobile && "opacity-100 translate-x-0"
      )}
    >
      <div className="p-0 py-5">
        <HeaderSearch inputClassName="max-w-[calc(100%-32px)]" />

        <NavItem
          listClassName="px-0 text-black text-xs"
          subListClassName="min-w-0 grid grid-cols-2 translate-x-0 !pr-2 w-[calc(100%-32px)]"
          summaryClassName="py-4"
          linkClassName="py-4"
        />
      </div>
    </div>
  );
};

export default HeaderOnMobile;
