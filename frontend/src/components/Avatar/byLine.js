import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/usersReducer";
import { useEffect } from "react";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    if (!users || !users[userId]) {
      dispatch(fetchUsers());
    }
  }, [dispatch, userId, users]);

  if (!users || !users[userId]) {
    return <div>Loading...</div>;
  }

  const author = users[userId];

  return (
    <div className="byLine">
      <img className="avatar" src={author.avatar?.photoUrl || ""} alt="img" />
      <div className="username">{author.username}</div>
    </div>
  );
};

export default ByLine;
