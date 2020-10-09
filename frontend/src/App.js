import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import * as ROUTES from './constants/routes';
// import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import Home from "./pages/home"

function App() {

  // const user = {username: "stian"}

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
    </Switch>
  </Router>
  );
}

export default App;
