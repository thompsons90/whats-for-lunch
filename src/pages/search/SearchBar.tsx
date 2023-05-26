import React, { useState, ChangeEvent } from "react";
import { SearchBarProps } from "../../utils/constants";

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value); // Call the onSearch function with the updated value
  };

  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={() => onSearch(searchTerm)}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
