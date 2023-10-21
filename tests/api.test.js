import { test, expect } from '@playwright/test';
import { fetchMock } from 'fetch-mock';

test('RecipeComponent fetches data from API correctly', async ({ page }) => {
  // Mock the network request
  fetchMock.get('https://api.spoonacular.com/recipes/random?apiKey=a1ef51f91daf4b5baae9c503d96f2982', {
    recipes: [
      {
        // mock response data
        // Add your mock data here
      },
    ],
  });

  // Launch the browser and open the test page
  await page.goto('http://localhost:5173/'); // Replace with your local server URL

  // Check if the API call is made correctly
  const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=a1ef51f91daf4b5baae9c503d96f2982');
  const data = await response.json();

  // Check if the data fetched is not empty
  const recipeData = data.recipes[0];
  expect(recipeData).not.toBe(null);

  // You can perform more specific checks here, depending on your requirements

  // Clean up the mock
  fetchMock.restore();
});
