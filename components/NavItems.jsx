import React from "react";
import Link from "next/link";

const NavItems = () => {
  return (
    <>
      <nav className="hidden md:block">
        <div className="max-w-5xl mx-auto my-5 h-5">
          <ul className="uppercase text-sm sm:text-xs font-thin opacity-80 flex items-center justify-between tracking-wider">
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  new!
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  bras
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  panties
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  lingerie
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  sleep
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  sport & lounge
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  beauty
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  accessories
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  swim
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  vsco-lab
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  sale
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#">
                <a className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4">
                  vs now
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavItems;
