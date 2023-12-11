import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { MouseEvent, memo } from "react";

import { NAV_ITEMS } from "@/components/Header";
import { NavProps, NavItemProps } from "@/types/header";

const Nav = ({ containerClassName }: NavProps) => {
  return (
    <nav className={containerClassName}>
      <ul className="menu p-0 font-medium text-xs lg:text-sm lg:text-text_color lg:menu-horizontal">
        {NAV_ITEMS.map((el, idx: number) => <RenderNavItem key={idx} child={el.children} title={el.title} href={el.href} /> )}
      </ul>
    </nav>
  );
};

const RenderNavItem = ({ title, child, href }: NavItemProps) => {
  const { asPath, pathname } = useRouter();
  console.log("🚀 ~ file: Nav.tsx:21 ~ RenderNavItem ~ pathname:", asPath)

  const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
    if (child.length > 0) {
      e.preventDefault();
    }
  };

  return (
    <li className="dropdown dropdown-end hover:text-primary transtion-base group w-full lg:w-auto lg:dropdown-hover">
      <Link href={href} className={twMerge("focus:!text-primary py-4 lg:py-2", asPath === href && "text-primary")} onClick={handleNavigation} >
        {title}
      </Link>

      {child.length > 0 && (
        <ul className="dropdown-content rounded-md py-4 bg-[rgba(0,0,0,.98)] shadow-[0,5px,10px,0,rgba(0,0,0,2)] min-w-0 lg:min-w-[400px] grid grid-cols-2 lg:grid-cols-3 w-[calc(100%-32px)] lg:w-full">
          {child.map((el, idx: number) => (
            <li key={idx} className="hover:text-primary transtion-base text-text_color">
              <Link
                href={{
                  pathname: el.href,
                }}
                className={twMerge(
                  "focus:!text-primary",
                  asPath.includes(el.href) && "text-primary"
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
