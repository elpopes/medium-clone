import React from "react";
import { fetchAvatars, getAvatars } from "../../store/avatarsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AvatarItem from "../Avatar";

const AvatarIndex = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchAvatars());
    }, [dispatch]);
    
    const avatars = useSelector(getAvatars);
  return (
    <>
      <ul>
        {avatars.map((avatar, i) => {
          return <AvatarItem key={i} userId={avatar.userId} />;
        })}
      </ul>
    </>
  );
};

export default AvatarIndex;
