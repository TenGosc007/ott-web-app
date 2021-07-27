import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";

import { authUser, logout } from "state/user";
import { PrivateRoute } from "helpers/PrivateRoute";
import Home from "pages/Home";
import Splash from "pages/Splash";
import NotFound from "components/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authUser());
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route component={Splash} path="/login" />
        <PrivateRoute exact component={Home} path="/" />

        <Route exact path="/not-found" component={NotFound} />
        <Route render={() => <Redirect to="/not-found" />} />
      </Switch>
    </Router>
  );
}

export default App;
