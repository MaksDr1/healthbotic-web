import "./Control.css";
import Sidebar from "./SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Patient1 from "../../pages/Patient1";
import { Patient2, Overview } from "../../pages/Patient2";
import Patient3 from "../../pages/Patient3";
import React from "react";
import { useSelector } from "react-redux";
import { loggedInUserSelector } from "../../store/slice";

function Control() {
  const user = useSelector(loggedInUserSelector);
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/patient1" exact component={Patient1} />
        <Route path="/patient2" exact component={Patient2} />
        <Route path="/patient2/overview" exact component={Overview} />
        <Route path="/patient3" exact component={Patient3} />
      </Switch>
    </Router>
  );
}

export default Control;
