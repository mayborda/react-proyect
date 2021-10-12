import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CartWidget, MenuIcon } from "../Íconos/Icons";
import MobileNavBar from "./MobileNavBar";


const NavBar = () => {
  const [display, setDisplay] = useState("hidden");

  return (
    <div className="fixed  block top-0 w-full shadow-md z-50 bg-primary-dark">
      <div className="relative flex items-center px-4 py-2">

        <div className="flex items-center ml-4 lg:ml-8 space-x-4 text-md tracking-normal font-normal">
          <div className="hidden xl:block space-x-6 text-primary">
            <NavLink
              to="/"
              activeClassName=" text-5xl text-summerGreen border-b-2 font-bold"
              >
                Bazar.
            </NavLink> 
            <NavLink
              to="/category/deco"
              activeClassName="border-b-2 text-xl text-light"
            >
              Deco
            </NavLink>
            <NavLink
              to="/category/libreria"
              activeClassName="border-b-2 text-xl text-light"
            >
            Libreria
            </NavLink>
            <NavLink
              to="/category/vajilla"
              activeClassName="border-b-2 text-xl text-light "
            >
              Vajilla
            </NavLink>
          </div>
          <NavLink to="/cart" className="absolute right-14 text-light">
            <CartWidget />
          </NavLink>
          <div className="absolute right-4 xl:hidden">
            <div
              onClick={() =>
                display === "hidden"
                  ? setDisplay("block")
                  : setDisplay("hidden")
              }
            >
              <MenuIcon display={display} />
            </div>
          </div>
          <MobileNavBar display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;