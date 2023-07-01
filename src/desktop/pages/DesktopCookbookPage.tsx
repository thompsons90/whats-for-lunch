import { memo, useState } from "react";
import { recipeData } from "../../utils/data";
import { TestData } from "../../utils/testdata";
import MasterPage from "../../pages/MasterPage";
import ApiDataComponent from "../../api/FetchData";
// import SearchBar from "../../mobile/components/pages/search/SearchBar";
import RecipeCards from "../../cards/RecipeCards";
import { Recipe } from "../../utils/constants";
import SearchBar from "../../pages/search/SearchBar";

enum DataSource {
  Combined = 1,
  Users = 2,
  Ours = 3,
}

// interface Recipe {
//   id: number;
//   mainRecipeName: string;
//   recipeTypeSelectedValue: string[];
//   totalTimeMinutes: number;
//   prerequisiteMeal?: string;
//   ingredientsArray: string[];
//   recipeStatus: string;
//   recipeRating: number;
//   recipePrice: number;
//   recipeDirections: string[];
// }

// interface RecipeCardsProps {
//   recipes: Recipe[];
// }

export const DesktopCookbookPage = memo(() => {
  const [myRecipes, setMyRecipes] = useState<Recipe[]>(recipeData);
  // const [theirRecipes, setTheirRecipes] = useState<Recipe[]>(TestData);
  // const [combinedRecipe, setCombinedRecipe] = useState<Recipe[]>([
  //   ...recipeData,
  //   ...TestData,
  // ]);
  const [activeSource, setActiveSource] = useState<DataSource>(
    DataSource.Combined
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (searchTerm: string) => {
    const filtered = recipeData.filter((recipe) =>
      recipe.mainRecipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMyRecipes(filtered);
    // setTheirRecipes(filtered);
    // setCombinedRecipe(filtered);
  };

  const handleButtonClick = (source: DataSource) => {
    setActiveSource(source);
  };

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
    <div className="desktopPageContainer">
      <div className="cookbookPageContainer">
        <h1>Desktop Cookbook</h1>
        <MasterPage
          pageContent={
            <>
              <div className="cookbook-page-desktop-container">
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
                    <div>
                      <ApiDataComponent />
                    </div>
                    <div style={{ marginTop: "15px" }}>
                      <SearchBar onSearch={handleSearch} />
                    </div>
                  </div>
                  <div className="cookbook-page-recipe-container">
                    <>
                      {/* {activeSource === DataSource.Combined && (
                        <RecipeCards recipes={combinedRecipe} />
                      )} */}
                      {activeSource === DataSource.Users && (
                        <RecipeCards recipes={myRecipes} />
                      )}
                      {/* {activeSource === DataSource.Ours && (
                        <RecipeCards recipes={theirRecipes} />
                      )} */}
                    </>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </div>
    </div>
  );
});
