import { memo, useState } from "react";
import { navItems } from "../../App";
import MobileNavbar from "../components/MobileNavbar";
import SearchBar from "../../pages/search/SearchBar";
import { recipeData } from "../../utils/data";
import MobileRecipeCards from "../components/MobileRecipeCards";
import MobileRecipeDetails from "../components/MobileRecipeDetails";
import { Recipe, RecipeCardsProps } from "../../utils/constants";
import RecipeFilterButton, {
  RecipeGroup,
} from "../components/MobileRecipeFilterButton";
// import RecipeFilterButton, {
//   RecipeGroup,
// } from "../components/MobileRecipeFilterButton";

export const MobileCookbookPage = memo(() => {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipeData); // Initialize with all recipes
  const [flippedRecipeId, setFlippedRecipeId] = useState<number | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<RecipeGroup>(
    RecipeGroup.All
  );

  const handleSearch = (searchTerm: string) => {
    // Filter the recipes based on the search term and selected group
    const filtered = recipeData.filter((recipe) =>
      recipe.mainRecipeName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredRecipes(filtered); // Update the filtered recipes
  };

  const handleCardFlip = (recipeId: number) => {
    if (flippedRecipeId === recipeId) {
      console.log("turned back");
      setFlippedRecipeId(null); // Flip the card back to the front if already flipped
    } else {
      console.log(recipeId);
      setFlippedRecipeId(recipeId); // Flip the card to the back
    }
  };

  const handleFilter = (group: RecipeGroup) => {
    setSelectedGroup(group);

    // Filter the recipes based on the selected group
    if (group === RecipeGroup.All) {
      setFilteredRecipes(recipeData); // Show all recipes
    } else {
      const filtered = recipeData.filter(
        (recipe) => recipe.recipeTypeSelectedValue === group
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div>
      {flippedRecipeId === null ? (
        <>
          <div className="mobile-search-page-top-container">
            <h2>Cookbook</h2>
            <SearchBar onSearch={handleSearch} />
            <RecipeFilterButton
              selectedGroup={selectedGroup}
              onFilter={handleFilter}
            />
          </div>
          <div
            className="mobile-search-page-results-container"
            style={{
              marginTop: "85px",
              overflow: "auto",
            }}
          ></div>
          <div
            className="mobile-search-page-bottom-container"
            style={{ marginTop: "25px", height: "100%" }}
          >
            <MobileRecipeCards
              recipes={filteredRecipes}
              filteredRecipes={filteredRecipes}
              flippedRecipeId={flippedRecipeId}
              setFlippedRecipeId={setFlippedRecipeId}
              handleCardFlip={handleCardFlip}
            />
          </div>
          <MobileNavbar navItems={navItems} />
        </>
      ) : (
        <MobileRecipeDetails
          recipe={
            filteredRecipes.find((recipe) => recipe.id === flippedRecipeId) ||
            undefined
          }
          flippedRecipeId={flippedRecipeId}
          setFlippedRecipeId={setFlippedRecipeId}
        />
      )}
    </div>
  );
});
