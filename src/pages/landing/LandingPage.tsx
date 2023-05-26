import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../App";
// import ModalRecipe from "../../modals/recipe/ModalRecipe";
// import Navbar from "../../navbar/Navbar";
import Navbar from "../../navbar/Navbar";
import MasterPage from "../MasterPage";
import { NavProps } from "../../utils/constants";
// import Navbar2 from "../../navbar/Navbar2";

export const LandingPage: React.FC<NavProps> = (
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
    <>
      <div className="nav-container">
        <Navbar navItems={navItems} />
      </div>
      <div className="landing-wrapper">
        <div className="home-page-top-half">
          <div className="page-content-container1">
            <div className="home-page-list">
              <h1 className="home-page-catchy-text1">
                Your Guide to{" "}
                <span className="home-page-catchy-word">Great </span>
                Food
              </h1>
              <ul style={{ paddingBottom: "50px" }}>
                <li>
                  The go-to app to find new recipes, plan your meals, and never
                  forget your{" "}
                  <span style={{ borderBottom: "2px solid #3f3d56" }}>
                    favorites!
                  </span>
                </li>
              </ul>
              {/*//! ----- What should the action be; modal, link?  */}
              <div>
                <ul>
                  <li className="action-bar">
                    <a href="/search" id="search">
                      {/* <div className="search-bar-icon" /> */}
                      Let's Eat!
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="home-page-image1-container" />
          </div>
          <h2 className="home-page-catchy-text2">What about dinner?</h2>
        </div>
        <div className="page-content-container2">
          <ul className="home-page-links-description-container">
            <li className="home-page-container2-links-description">
              <a href="/calendar">
                <h3>Calendar</h3>
              </a>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              ratione minus modi eos saepe quae cum eaque consectetur nisi,
              deleniti ipsa. Consectetur tenetur omnis voluptatem, sequi libero
              quasi enim aperiam?
            </li>
            <li className="home-page-container2-links-description">
              <a href="/cookbook">
                <h3>Cookbook</h3>
              </a>
              <p>
                Save your favorite recipes from our <span>Cookbook</span> or add
                your own
              </p>
            </li>
            <li className="home-page-container2-links-description">
              <a href="/search">
                <h3>Discover</h3>
              </a>
              <p>
                Tired of the same recipes week in and week out? Discover new
                ones from our cookbook and be excited to gather friends and
                family around your new found culinary skills!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

// export default LandingPage;
