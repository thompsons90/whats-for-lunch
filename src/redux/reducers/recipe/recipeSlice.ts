import { createSlice } from "@reduxjs/toolkit";

// export const recipeSlice = createSlice({
//   name: "recipe",
//   initialState: [
//     {
//       id: 0,
//       type: ["Chicken"],
//       mainRecipeName: "Chicken & Dumplings",
//       totalTimeMinutes: 0,
//       prerequisiteMeal: "rotisserie chicken",
//       ingredients: [
//         "1 1/2 cups shredded cooked chicken",
//         "2 cups chicken broth",
//         "1 tbsp ranch seasoning mix",
//         "1/2 cup shredded cheddar cheese",
//         "1/8 tsp black pepper",
//         "3 Large Pillsbury Biscuits",
//       ],
//       status: "classic",
//       rank: "5 stars",
//       directions:
//         "Heat broth in large sauce pan with ranch, black pepper, & chicken till boiling. Cut each biscuit in half length wise, then each half into 4 pieces; add to boiling mix. Reduce heat to medium; simmer uncovered 5 - 7 mins stirring frequently until dumplings are cooked through. Stir in cheddar cheese to melt, serve!",
//     },
//   ],
//   reducers: {
//     addRecipe: (state, action) => {
//       if (Object.keys(state).length === 0) {
//         return [
//           {
//             id: action.payload.id,
//             type: action.payload.type,
//             mainRecipeName: action.payload.mainRecipeName,
//             totalTimeMinutes: action.payload.totalTimeMinutes,
//             ingredients: action.payload.ingredients,
//             status: action.payload.status,
//             rank: action.payload.rank,
//             directions: action.payload.directions,
//           },
//         ];
//       } else {
//         return [
//           ...state,
//           {
//             id: action.payload.id,
//             type: action.payload.type,
//             mainRecipeName: action.payload.mainRecipeName,
//             totalTimeMinutes: action.payload.totalTimeMinutes,
//             ingredients: action.payload.ingredients,
//             status: action.payload.status,
//             rank: action.payload.rank,
//             directions: action.payload.directions,
//           },
//         ];
//       }
//     },
//     updateRecipe: (state, action) => {
//       let index = state.findIndex((recipe) => recipe.id === action.payload.id);

//       state[index] = {
//         ...state[index],
//         // id: action.payload.id,
//         // type: action.payload.type,
//         // mainRecipeName: action.payload.mainRecipeName,
//         // totalTimeMinutes: action.payload.totalTimeMinutes,
//         // ingredients: action.payload.ingredients,
//         // status: action.payload.status,
//         // rank: action.payload.rank,
//         // directions: action.payload.directions,
//       };
//     },
//     removeRecipe: (state, action) => {
//       return (state = state.filter((recipe) => recipe.id !== action.payload));
//     },
//   },
// });
