import React from "react";
import Image from "next/image";
import { GrClose } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { AiOutlineUser, AiOutlineClockCircle, AiOutlinePlus} from "react-icons/ai";

const ResNav = ({ setMenu }) => {
  return (
    <>
      <div className="backdrop-blur-sm bg-white/20 top-0 w-full h-full fixed"></div>
      <div className="absolute right-10 top-0">
        <GrClose className="w-6 h-6" onClick={() => setMenu(false)} />
      </div>
      <aside
        class="w-80 fixed top-0 h-auto left-0 bottom-0 z-10 overflow-auto"
        aria-label="Sidebar"
      >
        <div class="px-3 bg-white">
          <div className="grid grid-cols-2">
            <div className="border-b-2 border-b-[#F4C6CF] py-3 w-full">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 441.78 130.63"
                  aria-hidden="true"
                  className="h-5 mx-auto"
                >
                  <g data-name="Layer 2">
                    <path
                      d="M7.73 6.68C5.92 2.22 4 1.18 0 1.18V0h17.26v1.11c-3 .14-4 .63-4 1.81 0 1.67.77 2.92 17.33 46.63L46.9 8.42A19.15 19.15 0 0 0 48.44 3c0-1.81-2.3-1.74-4-1.88V0H59l-.14 1.18c-4.38.35-5.64 1.39-7.31 5.5l-21.27 50.6c-.42 1-.76 1.32-1.12 1.32s-.83-.42-1.11-1.11zm76.79 51.24H67.26v-1.19h.28c4.66 0 4.73-3.06 4.73-9.19V15.67c0-6.06-.77-7-5.22-7.24V7.31h15.87v1.25c-4.94 0-5 1.25-5 9.19v29.79c0 7.45.41 9.12 6.61 9.12v1.26zm53.58-9.26c-2.57 5.92-8.42 10-17.61 10-15.87 0-25.61-10.92-25.61-26 0-14.06 9.88-26.17 26.52-26.17a39 39 0 0 1 14.89 3.06c.77.28 1 .49 1 1.18l-.49 10.16h-1.11c-.07-2.85-.7-6.26-2.93-8.07-3.08-2.51-6.63-3.82-12.48-3.82-13.43 0-19.42 10.16-19.42 22.34S107.4 56 121.11 56c7.73 0 12.81-2.92 15.45-7.86.56-1.11.76-1.25 1.39-1.11s.64.52.15 1.63zm52.56-32.85h-1.18c-.42-3.9-.7-5.29-6.89-5.29h-9.67V48c0 7.86.84 8.7 6.47 8.7v1.25h-17.26v-1.22c4.32 0 4.87-2 4.87-7.31v-38.9h-8.29c-6.68 0-8.14.21-8.35 5.29h-1.25l-.28-8.49s6.82.42 9.81.42h23a76.38 76.38 0 0 0 9.19-.35l.07.07zm34.24 42.91c-18.17 0-25.75-14.2-25.75-26.16 0-10.72 7.79-26 26.17-26 15 0 26.1 9.39 26.1 24.91 0 14.93-10.42 27.25-26.52 27.25zm-.07-49.9c-11.06 0-19.42 7.31-19.42 21.92 0 15.45 9.33 25.4 21.3 25.4 6 0 18.37-3.41 18.37-22.75 0-15.94-9.74-24.57-20.25-24.57zm82.69 49.1h-5.78c-7 0-9.53-4.73-13.29-10.72-3.2-5-6.47-12.11-10.93-12.39l-3.06-.21c-.35 0-.49.07-.49.63v13.08c0 7.86 1.39 8.35 6.61 8.35v1.25h-17v-1.19c4-.21 4.87-.69 4.87-8.35V13.29c0-3.62-2.16-4.59-5.85-4.59V7.45h17.54c9.46 0 15.87 4.25 15.87 12.39C296 26.45 290.6 32 284.76 34c5 1.88 9.12 13.29 13.29 17.67s5.91 5 9.47 5v1.27zm-27.07-25c6.13 0 9.95-4.59 9.95-11.62 0-7.45-4.52-11.69-11.48-11.69-3.76 0-4.94.07-4.94 1.18V31.4c0 .69.07.9 1.18 1.18a52.33 52.33 0 0 0 5.29.35zm54.89 25h-17.26v-1.19h.28c4.66 0 4.74-3.06 4.74-9.19V15.67c0-6.06-.77-7-5.22-7.24V7.31h15.87v1.25c-4.94 0-5 1.25-5 9.19v29.79c0 7.45.41 9.12 6.61 9.12v1.26zm43.35-1.19c2.51-.14 3.48-.69 3.48-1.67a6 6 0 0 0-.7-2.79l-5.29-13.92a.6.6 0 0 0-.63-.42h-14.27a.72.72 0 0 0-.69.56L357 49.21a21.92 21.92 0 0 0-1.32 5.36c0 1.46 1.39 2 4.11 2.09v1.25h-14.64l.21-1.19c4.38-.35 5.71-1.95 7.23-6.12L367.9 8.91c.83-2.23 1-2.37 1.39-2.37s.62.28 1.46 2.37L386.69 50c1.53 4 3.2 6.54 7.72 6.54l.21 1.32h-15.94v-1.13zM375 35.37v-.07l-6.33-18.16c-.14-.42-.28-.76-.49-.76s-.35.28-.49.76l-5.91 18c0 .07-.07.14-.07.21s.13.21.28.21h12.81c.13-.05.2-.05.2-.19zm20.29-21.03c1.82-.17 2.71-2.7 3-3.68a4.54 4.54 0 0 0 .23-2.43c-.29-.85-1.05-1.16-1.87-1.62a3.25 3.25 0 0 1-1.15-.94 2.4 2.4 0 0 1-.5-2.13 2.36 2.36 0 0 1 2.91-1.67c2.25.48 3.37 2.87 3.09 6.48-.1 1.31-1.18 6.53-5.69 6.81zm30.61 44.29c-4 0-7.86-.21-12-2.78v-9.68h1.26c.21 7.38 5.28 10 11.41 10 6.89 0 10.51-4.46 10.51-8.63 0-5.36-3.21-8.56-10.44-13.15-9.64-6.02-12.15-10.55-12.15-15.49 0-7 5.43-12.39 14.13-12.39a27.14 27.14 0 0 1 11 2.09v8h-1.25a13.24 13.24 0 0 0-1.37-4.25c-.42-.69-2.43-3.55-9.19-3.55-5.22 0-9 3.34-9 8.08 0 4.45 3.41 7.24 11.28 12.45s11.48 10.16 11.63 15.45c.06 8.15-6.28 13.85-15.82 13.85zM90.6 127.42v-10.37H92c.63 8.7 6.47 11.34 13.43 11.34 8 0 12.39-5.22 12.39-10.51 0-6.12-4-9.88-12.1-15-11-7-13.64-12.39-13.64-17.47 0-8.07 6.13-13.92 16.56-13.92a43.29 43.29 0 0 1 12 2.23v8.63h-1.39a12.48 12.48 0 0 0-1.53-4.59c-.56-.9-3-4.25-10.78-4.25-6.2 0-10.72 4-10.72 9.61 0 5.36 4.11 8.56 13.08 14.55 8.77 5.85 13.08 11.48 13.08 17.4 0 14.69-14.68 15.59-18.3 15.59-8.82-.04-13.48-3.24-13.48-3.24zm78.68-6.55-.14 8.91h-33.61v-1.25c3.48-.07 4.93-.91 4.93-7.38V85c0-3.2-2.15-4.38-5.91-4.38v-1.29c2.78.21 6.68.35 10.3.35 2.78 0 9.88 0 14.34-.07 1.39 0 8.21-.21 8.21-.28l-.14 8.56H166c-.28-5.29-3.41-5.71-9.53-5.71 0 0-7.58-.07-9.74-.07-.69 0-.77.21-.77.69V101c0 .35 0 .7.42.7h11.9c2.23 0 3.06-.76 3.48-2.78h1.32v10.64h-1.32c-.14-2.37-.21-4.59-4-5-2-.21-10.23-.35-11.35-.35a.44.44 0 0 0-.49.49v19.21c.14 3.48.21 3.48 8.84 3.48 2.79 0 8.91-.07 10.37-.77 2-1 2.65-2.78 2.86-5.71h1.25zm53.86-.35c-2.57 5.92-8.42 10-17.61 10-15.87 0-25.61-10.93-25.61-26 0-14.06 9.88-26.17 26.51-26.17a39.1 39.1 0 0 1 14.9 3.06c.76.28 1 .49 1 1.18l-.49 10.16h-1.14c-.07-2.85-.7-6.26-2.92-8.07-3.06-2.51-6.61-3.83-12.46-3.83-13.43 0-19.41 10.16-19.41 22.34s6.54 24.7 20.25 24.7c7.73 0 12.81-2.92 15.45-7.86.57-1.11.77-1.25 1.39-1.11s.63.49.14 1.6zm55.6 9.26H273c-7 0-9.53-4.73-13.29-10.72-3.2-5-6.48-12.11-10.93-12.38l-3.06-.21c-.35 0-.49.07-.49.63v13.08c0 7.86 1.4 8.35 6.61 8.35v1.25h-17v-1.19c4-.21 4.88-.69 4.88-8.35V85.17c0-3.62-2.16-4.59-5.85-4.59v-1.25h17.54c9.46 0 15.87 4.25 15.87 12.39 0 6.61-5.43 12.18-11.28 14.13 5 1.88 9.12 13.29 13.3 17.68s5.91 5 9.47 5v1.24zm-27.07-25c6.12 0 10-4.59 10-11.62 0-7.45-4.53-11.69-11.49-11.69-3.76 0-4.94.07-4.94 1.18v20.6c0 .69.07.9 1.18 1.18a52.09 52.09 0 0 0 5.25.36zm68.64 16.09-.14 8.91h-33.61v-1.25c3.48-.07 4.94-.91 4.94-7.38V85c0-3.2-2.16-4.38-5.92-4.38v-1.29c2.78.21 6.68.35 10.3.35 2.78 0 9.88 0 14.34-.07 1.39 0 8.21-.21 8.21-.28l-.14 8.56H317c-.28-5.29-3.41-5.71-9.54-5.71 0 0-7.58-.07-9.75-.07-.69 0-.76.21-.76.69V101c0 .35 0 .7.41.7h11.9c2.23 0 3.06-.76 3.48-2.78h1.32v10.64h-1.32c-.14-2.37-.21-4.59-4-5-2-.21-10.23-.35-11.34-.35a.44.44 0 0 0-.49.49v19.21c.14 3.48.21 3.48 8.84 3.48 2.79 0 8.91-.07 10.37-.77 2-1 2.65-2.78 2.85-5.71h1.26zm51.06-33.2h-1.19c-.41-3.9-.69-5.29-6.88-5.29h-9.67v37.45c0 7.86.83 8.7 6.47 8.7v1.25h-17.26v-1.19c4.31 0 4.87-2 4.87-7.31v-38.9h-8.28c-6.68 0-8.14.21-8.35 5.29h-1.25l-.29-8.49s6.83.42 9.82.42h23a76.38 76.38 0 0 0 9.19-.35l.07.07z"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="mx-auto border-b-2 border-b-[#fff] py-3 w-full">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 305.03 65.34"
                  aria-hidden="true"
                  className="h-5 ml-3 pl-3"
                >
                  <g id="pink-logo-intl-long_svg__Layer_2" data-name="Layer 2">
                    <path
                      d="M122.82 42.24h2.87v7.7h-2.87zm-6.55-5.57v28.67h6.55v-9.83h5.94l3.48-3.51V40.15l-3.48-3.48zm43.17 0v12.94L155 36.67h-6.39v28.67H154v-13l4.42 13h6.39V36.67zm21.83 0-4.84 10.19V36.67h-6.55v28.67h6.55v-7.09l1.48-2.7 3.81 9.79h7L182 48.09l6.27-11.42zM137 65.34h6.55V36.66H137zM148.07 0v6.59l-2.62 5.08h6.1l3.07-6.06V0zM12 0 9.38 21.26 6.84 0H0l4.34 28.67h9.34L18.06 0zm10 28.67h6.55V0H22zM36.74 0l-3.48 3.48v21.71l3.48 3.48h8.56l3.48-3.48V19.5h-6v3.6h-3V5.57h3v3.61h6v-5.7L45.3 0zm16.14 0v5.57h5v23.1h6.55V5.57h5V0zm27.2 5.57H83V23.1h-2.92zM77 0l-3.47 3.48v21.71L77 28.67h9l3.48-3.48V3.48L86 0zm23.75 5.57h2.87v7.7h-2.87zM94.21 0v28.67h6.55v-9.83h1.6l2.09 9.83h6.47l-2.74-11.46h.16l1.85-1.89V3.48L106.7 0zm20.56 28.67h6.56V0h-6.56zM134 7.41l1.19 9.92h-2.39zM129.64 0l-4.34 28.67h6.19l.69-6.06h3.65l.73 6.06h6.8L139 0zm33 0-3.48 3.48v10l3.48 3.48h5.65v6.14H165v-3.6h-6.18v5.69l3.48 3.48h9.09l3.48-3.48V14.83l-3.48-3.48h-5.65V5.57h2.58v3.61h6.18v-5.7L170.93 0zm30 0-3.48 3.48v10l3.48 3.48h5.65v6.14H195v-3.6h-6.19v5.69l3.48 3.48h9.1l3.48-3.48V14.83l-3.48-3.48h-5.66V5.57h2.58v3.61h6.19v-5.7L201 0zm16.71 0v28.67h15.2V23.1h-8.64v-6.18h7.25v-5.57h-7.25V5.57h8.64V0zm22.74 0-3.48 3.48v21.71l3.48 3.48h8.56l3.48-3.48V19.5h-6v3.6h-3V5.57h3v3.61h6v-5.7L240.68 0zm23.3 5.57h2.87v7.7h-2.87zM248.87 0v28.67h6.55v-9.83H257l2.09 9.83h6.47l-2.74-11.46h.18l1.85-1.89V3.48L261.36 0zm20.56 0v28.67h15.2V23.1H276v-6.18h7.26v-5.57H276V5.57h8.65V0zm19.05 0v5.57h5v23.1H300V5.57h5V0z"
                      id="pink-logo-intl-long_svg__Layer_1-2"
                      data-name="Layer 1"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#f7f7f8] p-5">
          <div className="flex bg-white py-3">
            <RiSearchLine className="w-7 h-7 text-gray-600 ml-2" />
            <input
              type="text"
              placeholder="Search"
              className="ml-3 text-sm outline-none"
            />
          </div>
          <ul className="mt-8 text-gray-600 uppercase tracking-wider text-lg">
            <li className="mb-4">Today&apos;s offers</li>
            <li className="mb-4">new!</li>
            <li className="mb-4">bras</li>
            <li className="mb-4">panties</li>
            <li className="mb-4">lingerie</li>
            <li className="mb-4">sleep</li>
            <li className="mb-4">sport & lounge</li>
            <li className="mb-4">beauty</li>
            <li className="mb-4">accessories</li>
            <li className="mb-4">swim</li>
            <li className="mb-4">vsco-lab</li>
            <li className="mb-4">sale</li>
            <li className="mb-4 capitalize">VS Now</li>
          </ul>
          <div className="text-gray-600 border-b border-gray-300 pb-5">
            <div className="flex items-center">
              <AiOutlineUser className="w-6 h-6" />
              <p className="font-bold uppercase text-sm ml-3">
                Login/create account
              </p>
            </div>
            <div className="flex items-center mt-3">
              <AiOutlineClockCircle className="w-6 h-6" />
              <p className="font-bold uppercase text-sm ml-3">order status</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
          <div className="flex divide-x divide-gray-300 pt-8 pb-16">
            <button className="px-2">
              <Image
                className="rounded-full"
                src="/india.png"
                width={16}
                height={16}
                alt="india"
              />
            </button>
            <button className="uppercase text-[12px] px-2">english</button>
            <button className="uppercase text-[12px] px-2">inr</button>
          </div>
          <div className="pb-8">
            <AiOutlinePlus/>
          </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ResNav;
