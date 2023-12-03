export interface NavProps {
  containerClassName?: string;
}

export interface NavItemProps {
  title: string;
  href: string;
  children: Array<{
    title: string;
    href: string;
  }>;
}
