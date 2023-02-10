// Should be able to pull the image for the given userId.
// Create a default export component that returns an avatar based on the user_id.

import React from "react";
import { fetchAvatar } from "../../store/avatarsReducer";
import { useDispatch, useSelector } from "react-redux";

const AvatarItem = ({ userId }) => {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.avatars[userId]);

  React.useEffect(() => {
    if (userId) {
      dispatch(fetchAvatar(userId));
    }
  }, [dispatch, userId]);

  if (!avatar) return null;

  return <img src={avatar.avatar.photoUrl} alt="avatar" />;
};

export default AvatarItem;
