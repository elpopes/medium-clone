import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/usersReducer";
import { useEffect } from "react";
import { getUser } from "../../store/usersReducer";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();

  const user = useSelector(getUser(userId));

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId, user]);
  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="byLine">
      <img
        className="avatar"
        src={
          user && user.avatar && user.avatar.photoUrl
            ? user.avatar.photoUrl
            : "https://medium-earth-seeds.s3.amazonaws.com/users/default.png"
        }
        alt="img"
      />
      <div className="username">{user && user.username}</div>
    </div>
  );
};

export default ByLine;
