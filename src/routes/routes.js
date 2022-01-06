import React from "react";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Addnew from "../pages/Dashboard/Pages/Prodocts/Addnew"

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
