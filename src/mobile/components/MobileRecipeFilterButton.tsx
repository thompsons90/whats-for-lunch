import React, { ChangeEvent } from "react";

interface RecipeFilterButtonProps {
  selectedGroup: RecipeGroup;
  onFilter: (group: RecipeGroup) => void;
}

export enum RecipeGroup {
  All = "All",
  Chicken = "Chicken",
  Sandwich = "Sandwich",
  Hotdog = "Hotdog",
  Pasta = "Pasta",
  Mexican = "Mexican",
  Soup = "Soup",
  Italian = "Italian",
}

const RecipeFilterButton: React.FC<RecipeFilterButtonProps> = ({
  selectedGroup,
  onFilter,
}) => {
  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    const group = event.target.value as RecipeGroup;
    onFilter(group);
  };

  return (
    <div>
      <select value={selectedGroup} onChange={handleFilter}>
        <option value={RecipeGroup.All}>All</option>
        <option value={RecipeGroup.Chicken}>Chicken</option>
        <option value={RecipeGroup.Sandwich}>Sandwich</option>
        <option value={RecipeGroup.Hotdog}>Hotdog</option>
        <option value={RecipeGroup.Pasta}>Pasta</option>
        <option value={RecipeGroup.Mexican}>Mexican</option>
        <option value={RecipeGroup.Soup}>Soup</option>
        <option value={RecipeGroup.Italian}>Italian</option>
      </select>
    </div>
  );
};

export default RecipeFilterButton;
