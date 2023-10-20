export interface Recipe {
    sourceUrl: string;
    title: string;
    image: string;
    extendedIngredients: { name: string }[];
    analyzedInstructions: { steps: { step: string }[] }[];
  }
  