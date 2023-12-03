export interface NavProps {
  containerClassName?: string;
}

export interface NavItemProps {
  title: string;
  href: string;
  child: Array<{
    title: string;
    href: string;
  }>;
}
