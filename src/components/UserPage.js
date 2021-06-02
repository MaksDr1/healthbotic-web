import { useSelector } from "react-redux";
import { loggedInUserSelector } from "../store/slice";
import Navbar from "./Navbar";
import Patient1 from "../pages/Patient1";
import Patient3 from "../pages/Patient3";
import Products from "../pages/Patient2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserPage = () => {
  const user = useSelector(loggedInUserSelector);

  return (
    <>
      <h1>Name: {user?.name}</h1>
      <h2>Email: {user?.email}</h2>
      <h2>User id: {user?.id}</h2>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Patient1} />
          <Route path="/reports" component={Patient3} />
          <Route path="/products" component={Products} />
        </Switch>
      </Router>
    </>
  );
};
