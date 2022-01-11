import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
