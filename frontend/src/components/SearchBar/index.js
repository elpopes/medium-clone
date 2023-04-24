import React, { useState, useContext } from "react";
import "./SearchBar.css";
import SearchContext from "./SearchContext";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);
dom.watch();

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { handleSearch } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-bar">
        <div className="input-with-icon">
          <FontAwesomeIcon icon="search" className="magnifying-glass" />
          <input
            type="search"
            placeholder="Search Medium-Earth"
            value={searchTerm}
            onChange={handleChange}
            className="search-input"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
