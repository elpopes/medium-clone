import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/usersReducer";
import { useEffect } from "react";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users[userId]);

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
      <img className="avatar" src={user.avatar.photoUrl} alt="img" />
      <div className="username">{user.username}</div>
    </div>
  );
};

export default ByLine;
