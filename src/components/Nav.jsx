import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Nav = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const handleToggleBtn = () => {
    setToggle((pre) => !pre);
  };
  return (
    <nav className="max-w-[2520px] mx-auto xl:px-20 md:px-10 px-4">
      <div className="flex justify-between items-center py-5  relative">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
        <div className="hidden sm:flex flex-1 justify-end items-center">
          <ul className="flex gap-10">
            {navLinks.map((el) => (
              <li
                key={el.id}
                className={`text-base cursor-pointer duration-200 hover:text-white ${
                  active === el.title ? "text-white" : "text-dimWhite"
                }`}
                onClick={() => setActive(el.title)}
              >
                <a href={el.id}>{el.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:hidden flex flex-1 justify-end  items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="text-white cursor-pointer"
            onClick={handleToggleBtn}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } flex-col justify-end items-center py-3 absolute top-16 -right-6 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-black-gradient z-10`}
          >
            <ul className="flex flex-col gap-5">
              {navLinks.map((el) => (
                <li
                  key={el.id}
                  className={`text-base cursor-pointer duration-200 hover:text-white ${
                    active === el.title ? "text-white" : "text-dimWhite"
                  }`}
                >
                  <a href={el.id}>{el.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
