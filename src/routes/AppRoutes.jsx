import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Create from "../pages/create/Create";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Project from "../pages/project/Project";
import Signup from "../pages/signup/Signup";

const AppRoutes = () => {
  return (
    <Router>
    <Sidebar/>
      <div className="container">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default AppRoutes;
