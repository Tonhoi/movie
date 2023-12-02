import { MouseEvent, memo } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

import { NAV_ITEMS } from "@/constants";
import { MenuProps, NavItemProps } from "@/types/header";

const NavItem = (props: NavItemProps) => {
  const { listClassName, containerClassName } = props;

  return (
    <nav className={containerClassName}>
      <ul
        className={twMerge(
          "menu text-text_color p-0 font-medium",
          listClassName
        )}
      >
        {NAV_ITEMS.map((el, idx: number) => (
          <RenderNavItem
            key={idx}
            title={el.title}
            href={el.href}
            children={el.children}
            {...props}
          />
        ))}
      </ul>
    </nav>
  );
};

const RenderNavItem = (props: MenuProps & NavItemProps) => {
  const {title, children, summaryClassName, subListClassName, itemClassName, href} = props;
  const { asPath } = useRouter();

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    if (children.length > 0) {
      e.preventDefault();
    }
  };

  return (
    <li
      className={twMerge(
        "dropdown dropdown-hover hover:text-primary transtion-base group",
        itemClassName
      )}
    >
      <Link
        href={href}
        onClick={handleNavigation}
        className={twMerge("focus:!text-primary", summaryClassName)}
      >
        {title}
      </Link>

      {children.length > 0 && (
        <ul
          className={twMerge(
            "dropdown-content z-[1] rounded-md min-w-[400px] py-4 grid grid-cols-3 -translate-x-[70%] bg-[#2f2e35] group-hover:text-text_color",
            subListClassName
          )}
        >
          {children.map((el, idx: number) => (
            <li key={idx} className="hover:text-primary transtion-base">
              <Link
                href={el.href}
                className={twMerge(
                  "focus:!text-primary",
                  el.href === asPath && "text-primary"
                )}
              >
                {el.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default memo(NavItem);
