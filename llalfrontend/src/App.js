import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./Containers/Home";
import Settings from "./components/Settings";
import emailAuth from "./Containers/emailAuth";
import reset from "./components/reset";
import BlogPage from "./Containers/BlogPage";
import NavBar from "./components/NavBar";
import CreateBlog from "./Containers/CreateBlog";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgottenpassword" component={emailAuth} />
          <Route path="/token/:id" component={reset} />
          <Route path="/register" component={SignupForm} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/blogs" component={BlogPage} />
          <Route path="/create" component={CreateBlog} />
          <PrivateRoute path="/settings" component={Settings} />
        </Switch>
      </>
    );
  }
}
export default App;
