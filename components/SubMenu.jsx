import React from "react";

const SubMenu = ({ sub }) => {
  return (
    <div className="p-5 mega-menu mb-16">
      <div className="container mx-auto w-full flex flex-wrap justify-between shadow-lg bg-[#F7F7F8] z-50">
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
          {sub.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
          {sub.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
          {sub.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
          {sub.slice(0, 5).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
