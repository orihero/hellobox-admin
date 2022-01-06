import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import DashboardPage from "../Pages/Dashboard";
import UsersPage from "../Pages/Users";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        {/* <Route exact path="/user" component={UsersPage} /> */}
      </Switch>
    </BrowserRouter>
  );
}
