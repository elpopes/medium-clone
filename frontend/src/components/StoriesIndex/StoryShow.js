import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStory, deleteStory } from "../../store/storiesReducer";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import { useHistory } from "react-router-dom";

function StoryShow() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { storyId } = useParams();
  const loggedIn = useSelector((state) => state.session.user);
  const sessionUser = useSelector((state) => state.session.user);
  const story = useSelector((state) => state.stories[storyId]);

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [storyId, dispatch]);

  if (!story) {
    return null;
  }

  const { authorId, title, body } = story;

  return (
    <>
      <div className="story-show-nav">
        {loggedIn ? SignedInNav : SignedOutNav}
      </div>
      <div className="story-show">
        <div className="story-show-title">
          <h1>{title}</h1>
          <Link to="/">WHERE SHOULD THIS GO?</Link>
        </div>

        <section className="story-show-section story-details">
          <h2>Details</h2>
          <p>{body}</p>
          <img src={story.photoUrl} alt="" />
        </section>
        <section className="story-update-delete-section">
          {authorId === sessionUser?.id && (
            <button
              onClick={() => {
                dispatch(deleteStory(storyId));
                history.push("/me-stories");
              }}
              className="delete-icon"
            >
              <i className="fa-solid fa-rectangle-xmark" />
            </button>
          )}
        </section>
      </div>
    </>
  );
}

export default StoryShow;
