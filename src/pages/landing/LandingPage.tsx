import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../App";
import ModalRecipe from "../../modals/recipe/ModalRecipe";
import Navbar from "../../navbar/Navbar";

interface NavItem {
  title: string;
  path: string;
}

export const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pageContainer">
      <div>
        <Navbar navItems={navItems} />
      </div>
      <div className="page-container">
        <h1>Landing Page</h1>
        <div className="links-grid">
          <ul>
            <li>
              <button
                onClick={toggleModal}
                className={`${isOpen ? "modal-close" : "modal-open"}`}
              >
                Open Modal
              </button>
              <ModalRecipe isOpen={isOpen} onClose={toggleModal} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
