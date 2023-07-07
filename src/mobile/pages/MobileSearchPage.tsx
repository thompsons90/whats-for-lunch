import { memo, useState } from "react";
// import { navItems } from "../../App";
// import MobileNavbar from "../components/MobileNavbar";
// import SearchBar from "../../pages/search/SearchBar";
// import { recipeData } from "../../utils/data";
// import MobileRecipeCards from "../components/MobileRecipeCards";
// import MobileRecipeDetails from "../components/MobileRecipeDetails";
// import { Recipe, RecipeCardsProps } from "../../utils/constants";

// export const MobileSearchPage = memo(() => {
//   const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipeData); // Initialize with all recipes
//   const [randomRecipeId, setRandomRecipeId] = useState<number | null>(null);

//   const handleSelectRandomRecipe = () => {
//     const randomIndex = Math.floor(Math.random() * recipeData.length);
//     const randomRecipe = recipeData[randomIndex];
//     setSelectedRecipe(randomRecipe);
//   };

//   return (
//     <div>
//       {randomRecipeId === null ? (
//         <>
//           <div className="mobile-search-page-top-container">
//             <h2>Cookbook Page:</h2>
//             <SearchBar onSearch={handleSearch} />
//           </div>
//           <div
//             className="mobile-search-page-results-container"
//             style={{ marginTop: "60px", overflow: "auto" }}
//           ></div>
//           <div
//             className="mobile-search-page-bottom-container"
//             style={{ marginTop: "25px" }}
//           >
//             <MobileRecipeCards
//               recipes={filteredRecipes}
//               randomRecipeId={randomRecipeId}
//               setRandomRecipeId={setRandomRecipeId}
//               handleCardFlip={handleCardFlip}
//             />
//           </div>
//           <MobileNavbar navItems={navItems} />
//         </>
//       ) : (
//         <MobileRecipeDetails
//           recipe={
//             filteredRecipes.find((recipe) => recipe.id === RandomRecipeId) ||
//             undefined
//           }
//           RandomRecipeId={RandomRecipeId}
//           setRandomRecipeId={setRandomRecipeId}
//         />
//       )}
//     </div>
//   );
// });
