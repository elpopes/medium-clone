import React from "react";
import { fetchAvatar, getAvatar } from "../../store/avatarsReducer";
import { useDispatch, useSelector } from "react-redux";

const AvatarItem = ({ userId }) => {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => getAvatar(userId)(state));

  React.useEffect(() => {
    if (userId) {
      dispatch(fetchAvatar(userId));
    }
  }, [dispatch, userId]);

  if (!avatar) return <img src="./default.jpg" alt="default avatar" />;
  return <img src={avatar.avatar.photoUrl} alt="avatar" />;
};

export default AvatarItem;
