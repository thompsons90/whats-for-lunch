import { Dispatch, ReactNode, SetStateAction } from "react";

export const URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=a1ef51f91daf4b5baae9c503d96f2982";

export interface NavItem {
  title: string;
  path: string;
  icon: string;
  mobile: boolean;
}

export interface NavProps {
  navItems: NavItem[];
}

export interface Recipe {
  id: number;
  mainRecipeName: string;
  recipeTypeSelectedValue: string[];
  totalTimeMinutes: number;
  prerequisiteMeal?: string;
  ingredientsArray: string[];
  recipeStatus: string;
  recipeRating: number;
  recipeDirections: string;
}

export interface RecipeCardsProps {
  recipes: Recipe[];
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedDate: Date | null;
}

export type FormValues = {
  id: number;
  mainRecipeName: string;
  recipeTypeSelectedValue: string[];
  totalTimeMinutes: number;
  prerequisiteMeal: string;
  ingredientsArray: string[];
  recipeStatus: string;
  recipeRatingValue: number;
  recipeDirections: string;
};

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface MasterPageProps {
  pageContent: ReactNode;
}

export interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
