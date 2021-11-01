import { Route, Switch } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Routes;
