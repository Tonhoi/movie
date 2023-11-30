import Link from "next/link";
import Image from "next/image";

import HeaderOnMobile from "./components/HeaderOnMobile";
import NavItem from "./components/NavItem";
import MenuIcon from "@/assets/Icons/MenuIcon";
import HeaderSearch from "./components/HeaderSearch";
import routes from "@/configs/routes";

const Header = () => {
  return (
    <div className="drawer max-w-[1300px] mx-auto h-24">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar px-8 py-4 flex items-center h-24">
          {/* logo */}
          <Link href={routes.home} className="flex items-center gap-3">
            <Image
              src={require("@/assets/images/logo.png")}
              className="w-10 h-10 object-cover rounded-lg"
              alt=""
            />
            <span className="text-xl text-text_color font-bold tracking-wider">
              FLASHMOV
            </span>
          </Link>
          <HeaderSearch inputClassName="m-0 ml-5 max-w-[280px] hidden lg:block max-h-10" />

          <label
            htmlFor="my-drawer-3"
            className="flex-none lg:hidden ml-auto cursor-pointer"
          >
            <MenuIcon className="text-text_color w-8 h-8" />
          </label>

          <div className="hidden lg:flex ml-auto">
            <NavItem listClassName="menu-horizontal flex-nowrap" />
          </div>
        </div>
      </div>

      {/* header on mobile and tablet */}
      <HeaderOnMobile />
    </div>
  );
};

export default Header;
