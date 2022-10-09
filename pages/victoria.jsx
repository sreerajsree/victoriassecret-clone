import React from "react";
import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import NavItems from "../components/NavItems";
import TopNavBar from "../components/TopNavBar";


const Victoria = () => {
  return (
    <>
      <TopNavBar />
      <NavBar />
      <NavItems/>
      <HomePage/>
      <div className="my-20"></div>
    </>
  );
};

export default Victoria;
