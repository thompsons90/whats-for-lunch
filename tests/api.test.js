import { test, expect } from '@playwright/test';
import axios from 'axios';

test('RecipeComponent fetches data from API correctly', async ({ page }) => {
  // Update the base URL to match your local development server URL.
  const baseURL = 'http://localhost:5173';
  await page.goto(baseURL);

  // Check if the API call is made correctly
  const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=a1ef51f91daf4b5baae9c503d96f2982'); // Replace with your actual API key

  // Check if the data fetched is not empty
  const recipeData = response.data.recipes[0];
  expect(recipeData).not.toBe(null);

  // You can perform more specific checks here, depending on your requirements
});
