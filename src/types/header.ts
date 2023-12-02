export interface NavItemProps {
  listClassName?: string;
  subListClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  summaryClassName?: string;
  containerClassName?: string;
}

export interface MenuProps {
  title: string;
  href: string;
  children: Array<{
    title: string;
    href: string;
  }>;
}
