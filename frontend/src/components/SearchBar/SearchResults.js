import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import StoryShow from "../StoriesIndex/StoryShow";
// import "./SearchResults.css";
import SearchContext from "./SearchContext";

const SearchResults = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <SearchContext.Consumer>
      {({ searchResults }) => (
        <>
          {currentUser ? <SignedInNav /> : <SignedOutNav />}
          <ul className="search-results-list">
            <h1>Query Outcomes</h1>
            {searchResults.map((story, i) => {
              return (
                <Link to={`/stories/${story.id}`} key={i}>
                  <StoryShow story={story} />
                </Link>
              );
            })}
          </ul>
        </>
      )}
    </SearchContext.Consumer>
  );
};

export default SearchResults;
