import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeHeaderBackground);

  return (
    <header
      className={
        navbar
          ? "sticky top-0 z-50 active overflow-hidden"
          : "bg-black lg:sticky top-0 z-10 overflow-hidden"
      }
    >
      <div className="container mx-auto py-5 px-8 md:px-16 flex justify-between items-center">
        <div>
          <h2 className="font-bold text-white text-lg">emeka ikele</h2>
        </div>
        <div className="hidden md:flex flex-wrap flex-row items-center text-white text-base font-medium space-x-8">
          <a href="#skills" rel="noreferrer">
            Skills &amp; Experience
          </a>
          <a href="#projects" rel="noreferrer">
            Work
          </a>
          <a href="#about" rel="noreferrer">
            About Me
          </a>
          <a href="#contact" rel="noreferrer">
            Contact
          </a>
        </div>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <MenuIcon
            className="h-6 w-6 text-white"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <>
            <div className="fixed w-screen bg-black bg-opacity-60 z-50 top-0 left-0 flex justify-end">
              <div className="w-3/5 h-screen bg-black ml-0 flex flex-col space-y-3 justify-center p-8">
                <XIcon
                  className="h-8 w-8 text-white cursor-pointer"
                  onClick={() => setShowMenu(false)}
                />
                <div className="text-white text-base opacity-60 font-medium space-y-4 flex flex-col">
                  <a href="#skills" rel="noreferrer">
                    Skills &amp; Experience
                  </a>
                  <a href="#projects" rel="noreferrer">
                    Work
                  </a>
                  <a href="#about" rel="noreferrer">
                    About Me
                  </a>
                  <a href="#contact" rel="noreferrer">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
