import { memo, useState } from "react";
import { recipeData } from "../../utils/data";
import RecipeCards from "../../cards/RecipeCards";
import SearchBar from "../../pages/search/SearchBar";
import MasterPage from "../../pages/MasterPage";

export const DesktopSearchPage = memo(() => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipeData); // Initialize with all recipes

  const handleSearch = (searchTerm: string) => {
    // Filter the recipes based on the search term
    const filtered = recipeData.filter((recipe) =>
      recipe.mainRecipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRecipes(filtered); // Update the filtered recipes
  };

  return (
    <div className="pageContainer">
      <MasterPage
        pageContent={
          <div className="page-container">
            <h1>Search Page</h1>
            <SearchBar onSearch={handleSearch} />
            <div>
              <RecipeCards recipes={filteredRecipes} />{" "}
              {/* Pass the filtered recipes to RecipeCards */}
            </div>
          </div>
        }
      />
    </div>
  );
});
