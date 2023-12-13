import { Portal } from "react-portal";
import { useRouter } from "next/router";
import { useEffect, memo } from "react";

import { useToggle } from "@/hooks";
import { MenuIcon } from "@/assets/Icons";
import { HeaderOnMobile, Nav, Search, Logo, Overlay } from "@/components/Header";

const Header = () => {
  const { on, toggleOff, toggleOn } = useToggle();
  const { asPath } = useRouter();

  useEffect(() => {
    if (on) {
      toggleOff();
    }
  }, [asPath]);

  return (
    <header className="sticky top-0 bg-transparent backdrop-blur z-50">
      <div className="wide py-4">
        <div className="flex-between">
          <Logo />

          <Search inputClassName="ml-5 max-w-[280px] hidden lg:block max-h-10" />

          <Nav containerClassName="hidden lg:flex ml-auto" />

          {/* block on table and moble */}
          <MenuIcon
            onClick={toggleOn}
            className="text-text_color w-8 h-8 flex-none lg:hidden ml-auto cursor-pointer"
          />

          <Overlay closeNavMobile={toggleOff} showNavMobile={on} />

          <Portal>
            <HeaderOnMobile showNavMobile={on} />
          </Portal>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
