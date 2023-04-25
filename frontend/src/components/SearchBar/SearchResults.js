import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import SearchContext from "./SearchContext";

const SearchResult = ({ story }) => {
  return (
    <li>
      <h2>{story.title}</h2>
      <p>{story.body}</p>
    </li>
  );
};

const SearchResults = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <SearchContext.Consumer>
      {({ searchResults }) => {
        console.log("searchResults from context:", searchResults);

        return (
          <>
            {currentUser ? <SignedInNav /> : <SignedOutNav />}
            <ul className="search-results-list">
              <h1>Query Outcomes</h1>
              {searchResults && searchResults.length > 0 ? (
                searchResults.map((story, i) => (
                  <Link to={`/stories/${story.id}`} key={i}>
                    <SearchResult story={story} />
                  </Link>
                ))
              ) : (
                <p>No search results found.</p>
              )}
            </ul>
          </>
        );
      }}
    </SearchContext.Consumer>
  );
};

export default SearchResults;
