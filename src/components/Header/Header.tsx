import { useEffect } from "react";
import { useRouter } from "next/router";

import MenuIcon from "@/assets/Icons/MenuIcon";
import useToggle from "@/hooks/useToggle";
import {
  HeaderOnMobile,
  NavItem,
  HeaderSearch,
  Logo,
  Overlay,
} from "@/components/Header";

const Header = () => {
  const { on, toggleOff, toggleOn } = useToggle();
  const { asPath } = useRouter();

  useEffect(() => {
    if (on) {
      toggleOff();
    }
  }, [asPath]);

  return (
    <div className="wide">
      <Overlay closeNavMobile={toggleOff} showNavMobile={on} />

      <div className="navbar py-4 px-0">
        <Logo />

        <HeaderSearch inputClassName="m-0 ml-5 max-w-[280px] hidden lg:block max-h-10" />

        {/* block on table and moble */}
        <MenuIcon
          onClick={toggleOn}
          className="text-text_color w-8 h-8 flex-none lg:hidden ml-auto cursor-pointer"
        />

        <NavItem
          listClassName="menu-horizontal flex-nowrap"
          containerClassName="hidden lg:flex ml-auto"
        />
      </div>

      <HeaderOnMobile showNavMobile={on} />
    </div>
  );
};

export default Header;
