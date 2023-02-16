import { Link } from "react-router-dom";

const sideBar = () => {
  return (
    <div className="sidebar-container">
      <h2>Discover more of what matters</h2>
      <div className="social-link-container">
        <Link className="link-with-icon" to={"https://github.com/elpopes"}>
          <i class="fa-brands fa-github"></i>
          Github
        </Link>
      </div>
    </div>
  );
};

export default sideBar;
