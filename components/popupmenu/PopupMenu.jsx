"use client";

import React, { useContext } from "react";
import MainPage from "./MainPage";
import InnerPageComp from "./InnerPageComp";
import InnerPageComp2 from "./InnerPageComp2";
import LoginPage from "./LoginPage";
import { AppContext } from "@/context/DataContext";

function PopupMenu() {
  const menuComp = [
    <MainPage key="mainPage" />,
    <InnerPageComp key="innerPageComp" />,
    <InnerPageComp2 key="innerPageComp2" />,
    <LoginPage key="loginPage" />,
  ];

  const { page } = useContext(AppContext);

  return (
    <div className="w-full h-full flex items-center justify-center backdrop-blur-2xl">
      {menuComp[page]}
    </div>
  );
}

export default PopupMenu;
