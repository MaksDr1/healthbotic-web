import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { loggedInUserSelector } from "../store/slice";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Patient1 from "../pages/Patient1";
import Patient2 from "../pages/Patient2";
import Patient3 from "../pages/Patient3";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserPage = () => {
  const user = useSelector(loggedInUserSelector);
  return (
    <>
      {/*<h1>Name: {user?.name}</h1>*/}
      {/*<h2>Email: {user?.email}</h2>*/}
      {/*<h2>User id: {user?.id}</h2>*/}
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/patient1" component={Patient1} />
          <Route path="/patient2" component={Patient2} />
          <Route path="/patient3" component={Patient3} />
        </Switch>
      </Router>
    </>
  );
};
export default UserPage;
