import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Create from "../pages/create/Create";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Project from "../pages/project/Project";
import Signup from "../pages/signup/Signup";
import OnlineUsers from "../components/user/OnlineUsers";

const AppRoutes = () => {
  const { user, authIsReady } = useAuthContext();
  return (
    <>
      {authIsReady && (
        <Router>
          { user && <Sidebar /> }
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              <Route path="/projects/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers/>}
        </Router>
      )}
    </>
  );
};

export default AppRoutes;
