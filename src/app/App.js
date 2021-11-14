import NavBar from "./components/navBar";
import { Route, Switch } from "react-router";
import Longin from "./components/login";
import Posts from "./components/posts";
import Home from "./components/home";
import Stats from "./components/stats";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard/stats" component={Stats} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Longin} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
