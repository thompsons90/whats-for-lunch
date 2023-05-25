import React from "react";
import { navItems } from "../../App";
import Navbar from "../../navbar/Navbar";
import MasterPage from "../MasterPage";

export const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <MasterPage
        pageContent={
          <div className="page-content-container">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="about-page-container">
                <div className="about-page-description-container">
                  <h1>About the App</h1>
                  <p className="about-page-app-blurb">
                    At{" "}
                    <span style={{ color: "#2a9d8f", fontSize: "1.5rem" }}>
                      "What's for Lunch?"
                    </span>
                    , we believe that making informed decisions about what you
                    eat is essential for a healthy and fulfilling lifestyle.
                    That's why we designed and built our food app with a clear
                    purpose in mind - to assist users in their quest to make
                    better food choices, discover exciting recipes, and
                    ultimately lead healthier lives.
                  </p>
                  <p className="about-page-app-blurb">
                    We understand that deciding what to eat can sometimes be a
                    daunting task, especially when faced with numerous options
                    and considerations. Our app aims to simplify this process by
                    providing users with a wide range of features and resources
                    to help them navigate through their culinary journey.
                  </p>
                  <p className="about-page-app-blurb">
                    With our app, you can explore a vast collection of recipes
                    tailored to your preferences and dietary needs. Whether
                    you're a seasoned chef or just starting in the kitchen, our
                    app offers recipes for every skill level and culinary
                    interest. From quick and easy weekday meals to gourmet
                    dishes for special occasions, you'll find inspiration and
                    guidance at your fingertips.
                  </p>
                  <p className="about-page-app-blurb">
                    Finally, we want to express our gratitude to God for the
                    blessings that have enabled us to create this app. We
                    recognize that our ability to provide these resources and
                    support to our users is a gift, and we're humbled to play a
                    part in helping you on your food journey. We strive to
                    maintain a sense of gratitude and responsibility in all
                    aspects of our work, and we hope that our app reflects this
                    commitment.
                  </p>
                  <p className="about-page-app-blurb">
                    Join us on this exciting culinary adventure, where we
                    combine technology, food knowledge, and a heartfelt
                    appreciation for the nourishment we receive. Together, let's
                    discover delicious recipes, make healthier choices, and
                    embrace the joy of food. Now,{" "}
                    <span style={{ color: "#2a9d8f", fontSize: "1.5rem" }}>
                      What's for Lunch?
                    </span>
                  </p>
                </div>
                <div className="about-page-description-container">
                  <h1>About the Team</h1>
                  <p>Scott is an experienced frontend developer.</p>
                </div>
                <div className="about-page-description-container">
                  <h1>Contact Me</h1>
                  <p>
                    <ul>
                      <li>LinkedIn</li>
                      <li>GitHub</li>
                      <li>Email</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  );
};
