import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Settings from "./components/Settings";
import emailAuth from "./components/emailAuth";
import reset from "./components/reset";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/forgottenpassword" component={emailAuth} />
          <Route path="/token/:id" component={reset} />
          <Route path="/register" component={SignupForm} />
          <PrivateRoute path="/home" component={Home} />
          <PrivateRoute path="/settings" component={Settings} />
        </Switch>
      </>
    );
  }
}
export default App;
