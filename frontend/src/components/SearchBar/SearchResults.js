import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import SearchContext from "./SearchContext";
import ByLine from "../Avatar/byLine";

const SearchResult = ({ story }) => {
  const truncateBody = (body) => {
    const words = body.split(" ");
    if (words.length <= 25) return body;

    const truncatedWords = words.slice(0, 25);
    return `${truncatedWords.join(" ")}...`;
  };

  return (
    <li>
      <ByLine userId={story.author_id} />
      <h2>{story.title}</h2>
      <p>{truncateBody(story.body)}</p>
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
