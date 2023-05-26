import React, { useState } from "react";
import MasterPage from "../MasterPage";
import SearchBar from "../search/SearchBar";
import { recipeData } from "../../utils/data";
import RecipeCards from "../../cards/RecipeCards";

enum DataSource {
  // Combined as the default
  Combined = 1,
  // Users inputed recipes
  Users = 2,
  // API database recipes
  Ours = 3,
}

export const CookBookPage = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipeData); // Initialize with all recipes
  const [activeSource, setActiveSource] = useState(DataSource.Combined);

  const handleSearch = (searchTerm: string) => {
    // Filter the recipes based on the search term
    const filtered = recipeData.filter((recipe) =>
      recipe.mainRecipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRecipes(filtered); // Update the filtered recipes
  };

  //todo: Use an enum to switch between searching through the API cookbook, user cookbook, and combined cookbook

  const handleButtonClick = (source: DataSource) => {
    setActiveSource(source);
  };

  //? Function to handle toggle button click
  const handleToggle = () => {
    switch (activeSource) {
      case DataSource.Combined:
        setActiveSource(DataSource.Users);
        console.log("Switched to Data Source 2");
        break;
      case DataSource.Users:
        setActiveSource(DataSource.Ours);
        console.log("Switched to Our Data Source");
        break;
      case DataSource.Ours:
        setActiveSource(DataSource.Combined);
        console.log("Switched to Data Source 1");
        break;
    }
  };

  return (
    <div className="pageContainer">
      <MasterPage
        pageContent={
          <div className="page-container">
            <div className="cookbook-page-search-container">
              <div className="cookbook-page-search-text">
                <h1>Cookbook</h1>
                <p>Search from your cookbook, ours, or combined!</p>
              </div>

              <div className="cookbook-page-button-container">
                <button className="button">
                  <div
                    className={`button-section ${
                      activeSource === DataSource.Combined ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(DataSource.Combined)}
                  >
                    Combined
                  </div>
                  <div
                    className={`button-section ${
                      activeSource === DataSource.Users ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(DataSource.Users)}
                  >
                    Yours
                  </div>
                  <div
                    className={`button-section ${
                      activeSource === DataSource.Ours ? "active" : ""
                    }`}
                    onClick={() => handleButtonClick(DataSource.Ours)}
                  >
                    Ours
                  </div>
                </button>
              </div>
              <div style={{ marginTop: "15px" }}>
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            <div className="cookbook-page-recipe-container">
              <RecipeCards recipes={filteredRecipes} />{" "}
              {/* Pass the filtered recipes to RecipeCards */}
            </div>
          </div>
        }
      />
    </div>
  );
};
