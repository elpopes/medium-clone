import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import StoryFormPage from "./components/StoriesIndex/StoryFormPage";
import MyStoriesIndex from "./components/StoriesIndex/MyStories";
import StoryShow from "./components/StoriesIndex/StoryShow";
import Account from "./components/Settings/Account";

function App() {
  const loggedIn = useSelector((state) => state.session.user);
  return (
    <Router>
      <Switch>
        <Route path="/new-story" component={StoryFormPage} />
        <Route path="/me-stories/" component={MyStoriesIndex} />
        <Route path="/me-account/" component={Account} />
        <Route path="/stories/:storyId" component={StoryShow} />
        {/* <Route exact path="/:userName" component={UserShowPage} /> */}
        <Route exact path="/" component={loggedIn ? HomePage : LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
