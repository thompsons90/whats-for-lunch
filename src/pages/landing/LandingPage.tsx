import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../App";
import ModalRecipe from "../../modals/recipe/ModalRecipe";
// import Navbar from "../../navbar/Navbar";
import Navbar from "../../navbar/Navbar";
// import Navbar2 from "../../navbar/Navbar2";

interface NavItem {
  title: string;
  path: string;
}

interface NavItem {
  title: string;
  path: string;
  icon: string;
  mobile: boolean;
}

interface Props {
  navItems: NavItem[];
  // navigateToCalendar: boolean;
  // setNavigateToCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LandingPage: React.FC<Props> = (
  {
    // navigateToCalendar,
    // setNavigateToCalendar,
  }
) => {
  const [isOpen, setIsOpen] = useState(false);

  // todo: update the interface Props so that I can the handleLandingClick can set state
  // const handleLandingClick = () => {
  //   setNavigateToCalendar(true);
  //   console.log("Here we go!");
  //   console.log(navigateToCalendar);
  // };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="landing-wrapper">
      <div className="landing-inner-wrapper">
        <Navbar navItems={navItems} />
        <div className="landing-content-container">
          <div>
            <h2>Meal planning, recipe adding, & family gathering.</h2>
            <p>
              This time, you know. Honey, <span>what's for lunch?</span>
            </p>
          </div>
          <div>
            <ModalRecipe isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

// export default LandingPage;
