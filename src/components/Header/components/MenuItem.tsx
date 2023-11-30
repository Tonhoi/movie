import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { NavItemProps, MenuProps } from "@/types/header";

const MenuItem = ({
  title,
  children,
  summaryClassName,
  subListClassName,
  itemClassName,
}: MenuProps & NavItemProps) => {
  return (
    <li
      className={twMerge(
        "hover:text-primary transtion-base group",
        itemClassName
      )}
    >
      <details>
        <summary className={summaryClassName}>{title}</summary>

        <ul
          className={twMerge(
            "min-w-[400px] grid grid-cols-3 -translate-x-[70%] bg-[#2f2e35] group-hover:text-text_color",
            subListClassName
          )}
        >
          {children.map((el, idx: number) => (
            <li key={idx} className="hover:text-primary transtion-base">
              <Link href={el.href}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
};

export default MenuItem;
