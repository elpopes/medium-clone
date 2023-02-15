import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchUser, getUser, updateUser } from "../../store/usersReducer";

const EditUser = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  const userId = currentUser.id;
  const dispatch = useDispatch();
  //   const user = useSelector(getUser(userId));

  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    if (email) {
      dispatch(fetchUser(userId));
      //   debugger;
    }
  }, [dispatch, email, userId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: userId, email })).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Email address</h1>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      {/* <button type="submit">Cancel</button> */}
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
