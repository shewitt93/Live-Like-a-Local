import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={SignupForm} />
          <PrivateRoute path="/home" component={Home} />
        </Switch>
      </>
    );
  }
}
export default App;
