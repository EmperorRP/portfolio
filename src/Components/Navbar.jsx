import { useState } from "react";

// import { close, logo, menu } from "../assets";
import close from "../assets/close.svg";
import rahulLogo from "../assets/rahulLogo.svg";
import menu from "../assets/menu.svg";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "C4Audits",
    title: "C4 Stats",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "blogs",
    title: "Web3 Blogs",
  },
  {
    id: "projects",
    title: "Projects",
  },
  // {
  //   id: "skills",
  //   title: "Skills",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-center items-center navbar">
      <img src={rahulLogo} alt="rahulpujari01" className="h-[45px]"></img>
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white hover:text-green-400 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6  bg-gradient-to-r from-slate-800 to-neutral-900 absolute  top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-3"
                } text-white hover:text-green-400 `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
