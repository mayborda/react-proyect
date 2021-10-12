import React from "react";
import { NavLink } from "react-router-dom";

const MobileLink = ({ setDisplay, to, text }) => {
  return (
    <NavLink
      onClick={() => setDisplay("hidden")}
      to={to}
      activeClassName="border-b-2 border-gray-400 font-bold"
      className="ml-2 text-lg"
    >
      {text}
    </NavLink>
  );
};

const MobileNavBar = ({ display, setDisplay }) => {
  return (
    <div>
      <div className={display}>
        <div className="absolute left-0 top-16 right-0  w-full flex flex-col rounded-sm shadow-md space-y-6 bg-primary-dark p-4 tracking-tight backdrop-filter backdrop-blur">
          <MobileLink
            setDisplay={setDisplay}
            to="/"
            text="Home"
          />
          <MobileLink
            setDisplay={setDisplay}
            to="/category/deco"
            text="Deco"
          />
          <MobileLink setDisplay={setDisplay} to="/category/libreria" text="Librería" />
          <MobileLink
            setDisplay={setDisplay}
            to="/category/vajilla"
            text="Vajilla"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;