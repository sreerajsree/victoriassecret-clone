import React from "react";

const NavItems = () => {
  return (
    <>
      <nav className="hidden md:block">
        <div className="max-w-5xl mx-auto my-5 h-5">
          <ul className="text-sm font-thin flex items-center justify-between tracking-wider">
            <li className="hoverable">
              <a className="uppercase relative block hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4 cursor-pointer">
                new!
              </a>
              <div className="p-5 mega-menu mb-16">
                <div className="container mx-auto w-full flex flex-wrap justify-between shadow-lg bg-[#F7F7F8] z-50 px-16 py-5">
                  <ul className="text-xs w-1/3">
                    <li className="font-bold pb-2 uppercase">all new arrivals</li>
                    <li className="font-bold pb-2 uppercase">consiously designed</li>
                  </ul>
                  <ul className="text-xs w-1/3 border-l-[2px] border-gray-300">
                    <li className="font-bold pb-2 uppercase ml-5">new arrivals</li>
                    <li className="pb-2 ml-5">Bras</li>
                    <li className="pb-2 ml-5">Panties</li>
                    <li className="pb-2 ml-5">Sleep</li>
                    <li className="pb-2 ml-5">Ligerie</li>
                    <li className="pb-2 ml-5">Sport & Lounge</li>
                    <li className="pb-2 ml-5">Swim</li>
                    <li className="pb-2 ml-5">Beauty</li>
                    <li className="pb-2 ml-5">Accessories</li>
                  </ul>
                  <ul className="text-xs w-1/3 border-l-[2px] border-gray-300">
                  <li className="pb-2 font-bold uppercase ml-5">featured shops</li>
                  <li className="pb-2 ml-5">Colour Your World</li>
                  <li className="pb-2 ml-5">Embroidery & Lace</li>
                  <li className="pb-2 ml-5">Bra Tops as Outerwear</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavItems;
