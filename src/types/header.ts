export interface NavItemProps {
  listClassName?: string;
  subListClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  summaryClassName?: string;
}

export interface MenuProps {
  title: string;
  children: Array<{
    title: string;
    href: string;
  }>;
}
