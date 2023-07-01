import { useState } from "react";

export default function useGetDirections(initialValue: boolean) {
  // recipeId: number
  const [recipeDirectionsId, setRecipeDirectionsId] = useState<boolean>(false);
  //   useState<number | null>(null);
  return [recipeDirectionsId, setRecipeDirectionsId];
}
