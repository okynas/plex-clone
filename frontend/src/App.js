import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/home"
import Browse from "./pages/browse"
import Login from "./pages/login"

import "./style/app.css"

// function ProtectedRoute({ user, children, path}) {
//   return <Route path={path} render={() => user ? children: <Redirect to="/login"/> } />
// }

// function IsSignedIn({user, children, path}) {
//   return <Route path={path} render={() =>  user ? <Redirect to="/browse"/> : children } />
// }

const ProtectedRoute = ({ user, children, path}) => <Route path={path} render={() => user ? children: <Redirect to="/login"/> } />
const IsSignedIn = ({user, children, path}) =>  <Route path={path} render={() =>  user ? <Redirect to="/browse"/> : children } />;

function App() {

  const user = null;
  // const user = {username: "stian"};

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute user={user} path="/browse">
          <Browse/>
        </ProtectedRoute>
        <IsSignedIn user={user} path="/login">
          <Login/>
        </IsSignedIn>
      </Switch>
    </Router>
  );
}

export default App;
