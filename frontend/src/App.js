import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import StoryFormPage from "./components/StoriesIndex/StoryFormPage";
import MyStoriesIndex from "./components/StoriesIndex/MyStories";

function App() {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <Router>
      <Switch>
        <Route exact path="/new-story" component={StoryFormPage} />
        <Route exact path="/me-stories/" component={MyStoriesIndex} />
        <Route exact path="/" component={loggedIn ? HomePage : LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
