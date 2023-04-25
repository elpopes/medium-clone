import React, { useState } from "react";
import SearchContext from "./SearchContext";

const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`/api/stories/search?query=${query}`);
      const data = await response.json();
      debugger;
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
