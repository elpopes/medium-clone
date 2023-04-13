import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchStory, deleteStory } from "../../store/storiesReducer";
import SignedInNav from "../signedInNav";
import SignedOutNav from "../signedOutNav";
import { useHistory } from "react-router-dom";
import "./StoryShow.css";
import ByLine from "../Avatar/byLine";

function StoryShow() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { storyId } = useParams();
  const loggedIn = useSelector((state) => state.session.user);
  const sessionUser = useSelector((state) => state.session.user);
  const story = useSelector((state) =>
    state && state.stories ? state.stories[storyId] : null
  );

  useEffect(() => {
    dispatch(fetchStory(storyId));
  }, [dispatch, storyId]);

  if (!story) {
    return null;
  }

  const { authorId, title, body } = story;

  return (
    story && (
      <>
        <div className="story-show-nav">
          {loggedIn ? <SignedInNav /> : <SignedOutNav />}
        </div>
        <div className="story-show">
          <ByLine userId={authorId} />
          <div className="story-title">
            <h1>{title}</h1>
          </div>

          <section className="story-body">
            <p>{body}</p>
            <img src={story.photoUrl} alt="" />
          </section>
          <section className="story-footer">
            <section className="claps-comments-section">
              <i class="fa-solid fa-hands-clapping"></i>
              <i class="fa-regular fa-comment"></i>
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
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              )}
            </section>
          </section>
        </div>
      </>
    )
  );
}

export default StoryShow;
