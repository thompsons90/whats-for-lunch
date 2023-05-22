import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  console.log(navItems);

  return (
    <div className="nav-wrapper">
      <section className="top-nav">
        <a href="/" className="logo-container"></a>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.path} className="section__title desktop-links">
                <h2>
                  <img
                    className="desktop-icons"
                    src={item.icon}
                    alt="menu icons"
                  />{" "}
                  {item.title}
                </h2>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
