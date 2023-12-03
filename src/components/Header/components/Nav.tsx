import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { MouseEvent, memo } from "react";

import { NAV_ITEMS } from "@/constants";
import { NavProps, NavItemProps } from "@/types/header";

const Nav = ({ containerClassName }: NavProps) => {
  return (
    <nav className={containerClassName}>
      <ul className="menu p-0 font-medium text-xs lg:text-sm lg:text-text_color lg:menu-horizontal">
        {NAV_ITEMS.map((el, idx: number) => (
          <RenderNavItem
            key={idx}
            title={el.title}
            href={el.href}
            children={el.children}
          />
        ))}
      </ul>
    </nav>
  );
};

const RenderNavItem = ({ title, children, href }: NavItemProps) => {
  const { asPath } = useRouter();

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    if (children.length > 0) {
      e.preventDefault();
    }
  };

  return (
    <li className="dropdown hover:text-primary transtion-base group w-full lg:w-auto lg:dropdown-hover">
      <Link
        href={href}
        onClick={handleNavigation}
        className="focus:!text-primary py-4 lg:py-2"
      >
        {title}
      </Link>

      {children.length > 0 && (
        <ul className="dropdown-content rounded-md py-4 bg-[#2f2e35] min-w-0 lg:min-w-[400px] grid grid-cols-2 lg:grid-cols-3 translate-x-0 lg:-translate-x-[70%] w-[calc(100%-32px)] lg:w-full">
          {children.map((el, idx: number) => (
            <li
              key={idx}
              className="hover:text-primary transtion-base text-text_color"
            >
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

export default memo(Nav);
