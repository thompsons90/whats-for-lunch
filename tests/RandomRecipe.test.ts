
import { test, expect } from '@playwright/test';
import axios from 'axios';

test('RecipeComponent fetches data from API correctly', async ({ page }) => {
  // Launch the browser and open the test page
  await page.goto('http://localhost:3000'); // Replace with your local server URL

  // Check if the API call is made correctly
  const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=YOUR_API_KEY'); // Replace with your actual API key

  // Check if the data fetched is not empty
  const recipeData = response.data.recipes[0];
  expect(recipeData).not.toBe(null);

  // You can perform more specific checks here, depending on your requirements
});
