import HeaderSearch from "./HeaderSearch";
import NavItem from "./NavItem";

const HeaderOnMobile = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay" />

      <ul className="p-0 w-80 min-h-full bg-base-200 py-5">
        {/* Sidebar content here */}
        <HeaderSearch inputClassName="max-w-[calc(100%-32px)]" />

        <NavItem
          listClassName="px-0 text-black text-base"
          subListClassName="min-w-0 grid grid-cols-2 translate-x-0 !ms-0 !py-2 !pr-2 bg-inherit group-hover:text-black"
          summaryClassName="py-4"
          linkClassName="py-4"
        />
      </ul>
    </div>
  );
};

export default HeaderOnMobile;
