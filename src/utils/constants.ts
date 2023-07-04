import { Dispatch, ReactNode, SetStateAction } from "react";

export const URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=a1ef51f91daf4b5baae9c503d96f2982";

export interface EventItems {
  title: string;
  allDay: boolean;
  start: Date | null;
  end: Date | null;
}

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
  foodImage: string;
  mainRecipeName: string;
  recipeTypeSelectedValue: string;
  totalTimeMinutes: number;
  prerequisiteMeal?: string;
  ingredientsArray: string[];
  recipeStatus: string;
  recipeRating: number;
  recipePrice: number;
  recipeDirections: string[];
}

export interface RecipeCardsProps {
  recipes: Recipe[];
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  modalPlanMeal: {
    mainRecipeName: string | null;
    recipeTypeSelectedValue: string | null;
    mealCategory: string | null;
    mealCategoryOptions: string[];
    startDate: Date;
    endDate: Date;
  };
  setModalPlanMeal: Dispatch<
    SetStateAction<{
      mainRecipeName: string;
      recipeTypeSelectedValue: string;
      mealCategory: string;
      mealCategoryOptions: string[];
      startDate: Date;
      endDate: Date;
    }>
  >;
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

export interface FilterOptions {
  mainRecipeName: string;
  recipeTypeSelectedValue: string;
  totalTimeMinutes: number;
  recipePrice: number;
  recipeRating: number;
}
