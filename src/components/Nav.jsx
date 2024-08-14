import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FaBars,FaTimes } from "react-icons/fa";
import '../style/nav.css';
import { Link,NavLink } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const holdMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu=()=>{
    setMenuOpen(false);
  }

  return (
    <nav className="bg-teal-900 p-4 grid grid-cols-12 items-center sticky top-0 z-50" onMouseLeave={closeMenu}>
      <div className="col-start-2 flex items-center">
        <a href="https://github.com/JohnEvanjr" className="text-white text-3xl mr-2">
          <FontAwesomeIcon icon={faGithub} className="transition-transform hover:scale-125" />
        </a>
        <a href="https://github.com/JohnEvan" className="text-white text-3xl">
          <FontAwesomeIcon icon={faFacebook} className="transition-transform hover:scale-125" />
        </a>
      </div>

      <button 
        className="navbar-toggler col-span-1 col-start-9 text-2xl md:hidden"
        onClick={holdMenu}
      >
        <div className="p-1.5 rounded-xl bg-white">
          {isMenuOpen?<FaTimes />:<FaBars />}
        </div>
      </button>

      <div className={`navbar-menu ${isMenuOpen ? "active" : ""} col-span-5 md:col-span-2 md:flex justify-center`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active col-span-1.5 text-white text-center text-2xl bg-teal-950 rounded-full px-5 py-2" : "col-span-1.5 text-white text-center text-2xl hover:bg-teal-950 rounded-full px-5 py-2"}
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active md:col-start-3 col-span-1.5 text-white text-center text-2xl bg-teal-950 rounded-full px-5 py-2" : "md:col-start-3 col-span-1.5 text-white text-center text-2xl hover:bg-teal-950 rounded-full px-5 py-2"}
          onClick={closeMenu}
        >
          About
        </NavLink>
      </div>

      <div className="col-span-2 col-start-10 md:col-span-2 md:col-start-10 flex gap-2 items-center justify-end">
        <div className="text-white font-thin text-3xl hidden md:block">JohnEvan</div>
        <div className="w-px h-8 mx-4 bg-white hidden md:block"></div>
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white">
          <img src={`${process.env.PUBLIC_URL}/dist/img/avademoporfolio2.jpg`} alt="Image" className="w-full h-full object-cover rounded-full"/>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
