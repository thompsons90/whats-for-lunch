import React, { useState } from "react";
import logo from "../utils/images/whatsForLunchGreen.png";
import hamburger from "../utils/images/hamburger.png";
// import Menu from "./Menu";
// import Burger from "./Burger";

interface NavItem {
  title: string;
  path: string;
  icon: string;
  mobile: boolean;
}

interface Props {
  navItems: NavItem[];
}

const Navbar: React.FC<Props> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav id="nav-menu">
      <a href="/" className="logo-container"></a>
      <div className="mobile-menu-container">
        <ul className="mobile-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="links">
                <div
                  className={`icon-container ${
                    item.mobile ? "icon-container-mobile" : ""
                  }`}
                  style={{
                    backgroundImage: `url(${item.icon})`,
                  }}
                ></div>
                {/* {item.title} */}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* //? ----- Desktop Section Navigation ----- */}
      <button
        className="hamburger-button"
        onClick={() => setIsOpen(!isOpen)}
      ></button>
      <div className={`header desktop-menu-container ${isOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsOpen(!isOpen)}
        ></button>
        <ul className="container section section__height desktop-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="section__title desktop-links">
                <h2>{item.title}</h2>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
