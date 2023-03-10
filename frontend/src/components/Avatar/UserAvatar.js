import React from "react";
import "./UserAvatar.css";

const UserAvatar = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  let avatar;
  if (currentUser && currentUser.avatar) {
    avatar = currentUser.avatar;
    return <img src={avatar.photoUrl} alt="avatar" className="user-avatar" />;
  } else {
    return (
      <img
        src="https://medium-earth-seeds.s3.amazonaws.com/users/default.png"
        alt="default avatar"
        className="user-avatar"
      />
    );
  }
};

export default UserAvatar;
