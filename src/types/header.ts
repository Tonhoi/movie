export interface NavProps {
  containerClassName?: string;
}

export interface NavItemProps {
  title: string;
  href: string;
  child: {
    title: string;
    href: string;
  }[];
}
