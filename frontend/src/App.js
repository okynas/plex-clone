import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import * as ROUTES from './constants/routes';
// import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import Home from "./pages/home"
import Browse from "./pages/browse"

import "./style/app.css"

function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (user) return children;

        if (!user) return <Redirect to="/" />

        return null;
      }}
    />
  );
}

function App() {

  // const user = null
  const user = {username: "stian"}

  return (
    // <Router>
    //   <Switch>
    //     <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
    //       {/* <SignIn /> */}
    //       <Home/>
    //     </IsUserRedirect> 
    //     {/* <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
    //       <SignUp />
    //     </IsUserRedirect>
    //     <ProtectedRoute user={user} path={ROUTES.BROWSE}>
    //       <Browse />
    //     </ProtectedRoute>
    //     <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
    //       <Home />
    //     </IsUserRedirect> */}
    //   </Switch>
    // </Router>
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <ProtectedRoute user={user} >
        <Browse/>
      </ProtectedRoute>
    </Switch>
  </Router>
  );
}

export default App;
