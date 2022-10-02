import React from "react";
import Link from "next/link";

const NavItems = () => {
  return (
    <div className="max-w-5xl sm:max-w-3xl mx-auto my-5">
      <ul className="uppercase text-sm sm:text-xs font-thin opacity-80 flex items-center justify-between">
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            new!
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            bras
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            panties
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            lingerie
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            sleep
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            sport & lounge
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            beauty
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            accessories
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            swim
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            vsco-lab
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            sale
          </Link>
        </li>
        <li>
          <Link
            className="hover:underline underline-offset-[18px] decoration-[#F4C6CF] decoration-4"
            href="/#"
          >
            vs now
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
