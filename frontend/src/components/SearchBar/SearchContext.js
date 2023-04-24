import { createContext } from "react";

const SearchContext = createContext({
  searchResults: [],
  handleSearch: () => {},
});

export default SearchContext;
