import React, { useState } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./mainHeader";
import SideDrawer from "./sideDrawer";
import NavLinks from "./navLinks";
import Backdrop from "../UIElements/Backdrop";

import "./mainNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerIsOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => handleDrawerClose()} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav
            className="main-navigation__drawer-nav"
            onClick={() => handleDrawerClose()}
          >
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => handleDrawerOpen()}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to={"/"}>Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
