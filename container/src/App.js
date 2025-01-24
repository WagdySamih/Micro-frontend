import React, { useState, useEffect, lazy, Suspense } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) history.push("/dashboard");
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassname}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth
                onSignIn={() => {
                  setIsSignedIn(true);
                }}
              />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <Dashboard />
            </Route>
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  );
};

export default App;
