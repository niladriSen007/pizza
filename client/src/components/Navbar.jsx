import React from "react";
import { Link } from "react-router-dom";
import {FaHamburger} from "react-icons/fa"
import { useState } from "react";
import ShowMenuPopup from "./ShowMenuPopup";
export const menu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Stores",
    link: "/stores",
  },
  {
    name: "Dishes",
    link: "/dishes",
  },
];

const Navbar = () => {

  const [showMenu,setShowMenu] = useState(false)

  const showNavbarMenu = () =>{
    setShowMenu(!showMenu)
  }

  return (
    <>
      <header className="w-full h-20 px-12 md:px-24 flex justify-between items-center  top-0 bg-white shadow-md relative transition-all duration-300 ease-in-out">
        <Link to="/"><section className="text-3xl font-bold text-red-700">Pominozz.</section></Link>
        <section className="hidden md:flex gap-8 ">
          {menu.map((m) => (
            <Link className="font-medium text-red-700" to={`${m.link}`} key={m}>
              {m.name}
            </Link>
          ))}
        </section>
        <section className="hidden md:flex gap-4">
          <button className="bg-red-700 rounded-md text-white px-2 py-1">
            Log In
          </button>
          <button className="px-2 py-1 border border-red-700 rounded-md">
            Register
          </button>
        </section>
        <FaHamburger size={28} className="text-red-700 md:hidden" onClick={showNavbarMenu}/>
      </header>
        <div className="absolute top-0">
        {showMenu && <ShowMenuPopup showNavbarMenu={showNavbarMenu}/>}
        </div>
    </>
  );
};

export default Navbar;
