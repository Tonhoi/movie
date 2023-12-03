import { memo } from "react";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

import { NAV_ITEMS } from "@/constants";

const after ="after:content-[''] after:relative after:w-1/2 after:left-4 after:h-[3px] after:inline-block after:align-middle after:-mr-[50%] after:bg-[rgba(255,255,255,.08)]";

const before ="before:content-[''] before:relative before:w-1/2 before:-left-4 before:h-[3px] before:inline-block before:align-middle before:-ml-[50%] before:bg-[rgba(255,255,255,.08)]";

const Heading = () => {
  const { query } = useRouter();

  const findHrefInNavItems:any = ( navItems: typeof NAV_ITEMS, targetHref: string ) => {
    for (const item of navItems) {
      // Kiểm tra xem href của mục hiện tại có phải là mục cần tìm không
      if (item.href.includes(targetHref)) {
        return item;
      }

      // Nếu có children và children không rỗng, thực hiện đệ quy để tìm kiếm trong children
      if (item.children && item.children.length > 0) {
        const foundInChildren = findHrefInNavItems(item.children, targetHref);

        if (foundInChildren) {
          return foundInChildren;
        }
      }
    }

    // Nếu không tìm thấy, trả về null
    return null;
  };

  const result = findHrefInNavItems(NAV_ITEMS, query.type);

  return (
    <h1
      className={twMerge(
        "capitalize text-4xl lg:text-5xl font-bold mb-20 overflow-hidden text-center",
        after,
        before
      )}
    >
      Phim {result?.title}
    </h1>
  );
};

export default memo(Heading);
