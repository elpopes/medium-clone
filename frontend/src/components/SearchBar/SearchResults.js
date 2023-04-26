import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import SearchContext from "./SearchContext";
import ByLine from "../Avatar/byLine";
import styles from "./SearchResults.module.css";

const SearchResult = ({ story }) => {
  const truncateBody = (body) => {
    const words = body.split(" ");
    if (words.length <= 25) return body;

    const truncatedWords = words.slice(0, 25);
    return `${truncatedWords.join(" ")}...`;
  };

  return (
    <li className={styles["search-result"]}>
      <div className={styles["search-result-text"]}>
        <div className={styles["byLine-container"]}>
          <ByLine userId={story.authorId} />
        </div>
        <h2>{story.title}</h2>
        <p>{truncateBody(story.body)}</p>
      </div>
      <img src={story.photoUrl} alt={story.title} />
    </li>
  );
};

const SearchResults = () => {
  const currentUser = useSelector((state) => state.session.user);

  return (
    <SearchContext.Consumer>
      {({ searchResults }) => {
        const stories = searchResults.stories || [];
        const searchTerm = searchResults.searchTerm || "";

        return (
          <>
            {currentUser ? <SignedInNav /> : <SignedOutNav />}
            <ul className={styles["search-results-list"]}>
              <h1 className={styles["query-outcomes"]}>
                Query Outcomes for {searchTerm}
              </h1>
              {stories.length > 0 ? (
                stories.map((story, i) => (
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
