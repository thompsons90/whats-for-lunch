import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../../utils/constants";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";
import FooterSection from "../../footer/Footer";
// import { navItems } from "../App";
// import ModalRecipe from "../../modals/recipe/ModalRecipe";
// import Navbar from "../../navbar/Navbar";
// import Navbar from "../navbar/Navbar";
// import MasterPage from "./MasterPage";
// import { NavProps } from "../utils/constants";
// import FooterSection from "../footer/Footer";
// import Navbar2 from "../../navbar/Navbar2";

export const DesktopLandingPage: React.FC<NavProps> = (
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
        <h2 className="home-page-catchy-text3">What's for Lunch?</h2>
        <div className="home-page-top-half">
          <div className="page-content-container1">
            <div className="home-page-list">
              <h1 className="home-page-catchy-text1">
                Your Guide to{" "}
                <span className="home-page-catchy-word">Great </span>
                Food
              </h1>
              <ul style={{ paddingBottom: "30px" }}>
                <li>
                  The go-to app to find new recipes, plan your meals, and never
                  forget your{" "}
                  <span style={{ fontStyle: "italic" }}>favorites!</span>
                </li>
              </ul>
              {/*//! ----- What should the action be; modal, link?  */}
              <div className="action-container">
                <ul>
                  <li className="action-bar">
                    <a href="/cookbook" id="search">
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

          <h3 className="home-page-mobile-scroll-text">Scroll for More</h3>
        </div>
        <div className="page-content-container2">
          <ul className="home-page-links-description-container">
            <li className="home-page-container2-links-description">
              <a href="/cookbook" className="home-page-bottom-links">
                <h3>Cookbook</h3>
              </a>
              <p>
                Whether it's your cookbook or ours, effortlessly search for
                recipes based on ingredients, dietary preferences, cooking time,
                and more. Quickly find the perfect recipe for any occasion or
                save your favorite recipes for easy access and create
                personalized collections to suit your tastes and interests.
              </p>
            </li>

            <li className="home-page-container2-links-description">
              <a href="/calendar" className="home-page-bottom-links">
                <h3>Calendar</h3>
              </a>
              <p>
                Our Meal Planner Calendar is user-friendly and designed to
                simplify your meal planning process. You can effortlessly
                organize and schedule your meals for the week, ensuring a
                well-balanced and stress-free dining experience. Say goodbye to
                last-minute meal decisions and hello to a healthier, more
                enjoyable dining routine.
              </p>
            </li>

            <li className="home-page-container2-links-description">
              <a href="/search" className="home-page-bottom-links">
                <h3>Discover</h3>
              </a>
              <p>
                Discover a world of culinary delights with a vast collection of
                recipes from various cuisines and categories. From appetizers to
                desserts, Cookbook has you covered. Browse through a rich
                library of curated recipes or unleash your creativity by adding
                your own unique recipes to personalize your cookbook.
              </p>
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "100px",
            }}
          >
            <div className="action-bar">
              <a href="/cookbook" id="search">
                {/* <div className="search-bar-icon" /> */}
                START HERE
              </a>
            </div>
          </div>
          <FooterSection />
        </div>
      </div>
    </>
  );
};

// export default LandingPage;
