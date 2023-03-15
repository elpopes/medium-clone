import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../store/usersReducer";
import { useEffect } from "react";

const ByLine = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const isUserLoaded = !!users;

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsers());
    }
  }, [dispatch, userId, users]);

  if (!isUserLoaded) {
    return <div>Loading...</div>;
  }

  const author = users.find((user) => user.id === userId);

  if (!author) {
    return <div>Author not found</div>;
  }

  return (
    <div className="byLine">
      <img className="avatar" src={author.avatar?.photoUrl || ""} alt="img" />
      <div className="username">{author.username}</div>
    </div>
  );
};

export default ByLine;
