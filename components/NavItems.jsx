import React from "react";
import DATA from "../data/data.json";
import SubMenu from "./SubMenu";

const NavItems = () => {
  return (
    <>
      <nav className="hidden md:block">
        <div className="max-w-5xl mx-auto my-5 h-5">
          <ul className="uppercase text-sm font-thin opacity-80 flex items-center justify-between tracking-wider">
            {DATA.nav.map((item, key) => (
              <li key={key} className="hoverable hover:bg-[#F7F7F8] hover:text-black">
                <a className="relative block hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4 cursor-pointer">
                  {item.name}
                </a>
                <SubMenu sub={item.submenu} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavItems;
