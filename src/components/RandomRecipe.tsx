// // RecipeComponent.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Recipe } from '../assets/utils';
import { apiKey } from '../assets/myUrls';

function RandomRecipe(): JSX.Element {
  const [recipe, setRecipe] = useState<Recipe | undefined>(undefined);

  async function getRandomRecipe() {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
      console.log(21, response.data);

      setRecipe(response.data.recipes[0]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getRandomRecipe();
  }, []);

  console.log('RECIPE', recipe);

  //? Test comment to be removed later 
  
  return (
    <div className="row">
      <button onClick={getRandomRecipe}>Generate Random Recipe</button>

      {recipe && (
        <div>
          Name:
          <a target="_blank" href={recipe.sourceUrl}>
            {recipe.title}
          </a>
        </div>
      )}
      {recipe && <img src={recipe.image} alt="Recipe" />}

      {recipe && (
        <div className="ingredients">
          <div>Ingredients needed:</div>  
          {recipe.extendedIngredients.map((ingredient, index) => (
            <span key={index}>{index !== recipe.extendedIngredients.length - 1 ? ingredient.name + ', ' : ingredient.name}</span>
          ))}
          {recipe.analyzedInstructions.map((instruction, idx) => (
            <ol key={idx}>
              {instruction.steps.map((step, index) => (
                <li key={index}>{step.step}</li>
              ))}
            </ol>
          ))}
        </div>
      )}
    </div>
  );
}

export default RandomRecipe;
