import React from "react";
import VsLayout from "../layouts/VsLayout";
import TopNavBar from "../components/TopNavBar";
import MainNav from "../components/MainNav";
import NavItems from "../components/NavItems";
import HomePage from "../components/HomePage";

const Victoria = () => {
  return (
    <>
      <VsLayout>
        <TopNavBar />
        <MainNav/>
        <NavItems />
        <HomePage />
      </VsLayout>
    </>
  );
};

export default Victoria;
