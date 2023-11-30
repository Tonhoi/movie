import { memo } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

import { NAV_ITEMS } from "@/constants";
import { NavItemProps } from "@/types/header";
import MenuItem from "./MenuItem";

const NavItem = (props: NavItemProps) => {
  const { listClassName, itemClassName, linkClassName } = props;
  const { asPath } = useRouter();

  return (
    <ul
      className={twMerge("menu text-text_color p-0 font-medium", listClassName)}
    >
      {NAV_ITEMS.map((el, idx: number) =>
        el.children ? (
          <MenuItem
            key={idx}
            title={el.title}
            children={el.children}
            {...props}
          />
        ) : (
          <li
            key={idx}
            className={twMerge(
              "hover:text-primary transtion-base",
              itemClassName
            )}
          >
            <Link
              href={el.href}
              className={`${linkClassName} ${
                el.href === asPath && "text-primary"
              }`}
            >
              {el.title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default memo(NavItem);
