import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../store/usersReducer";
import { useEffect } from "react";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const author = users[userId];

  useEffect(() => {
    if (!author) {
      dispatch(fetchUser(userId));
    }
  }, [dispatch, userId, author]);

  if (!author) {
    return <div>Loading...</div>;
  }

  return (
    <div className="byLine">
      <img className="avatar" src={author.avatar?.photoUrl || ""} alt="img" />
      <div className="username">{author.username}</div>
    </div>
  );
};

export default ByLine;
