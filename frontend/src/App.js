import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./pages/home"
import Browse from "./pages/browse"
import Login from "./pages/login"
import Watch from "./pages/watch"

import "./style/app.css"

const ProtectedRoute = ({ user, children, path}) => <Route path={path} render={() => user ? children: <Redirect to="/login"/> } />
const IsSignedIn = ({user, children, path}) =>  <Route path={path} render={() =>  user ? <Redirect to="/browse"/> : children } />;

function App() {

  const user = localStorage.getItem('user');

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
        <ProtectedRoute user={user} path="/watch">
          <Watch/>
        </ProtectedRoute>
        <ProtectedRoute user={user} path="/movie">
          <Movie/>
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
