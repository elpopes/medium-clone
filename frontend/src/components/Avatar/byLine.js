import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/usersReducer";
import { useEffect } from "react";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    if (state && state.users.undefined) {
      return state.users.undefined.user;
    }
    return null;
  });
  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId]);
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
