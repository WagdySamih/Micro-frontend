import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";
import Progress from "./components/Progress";
import { useState } from "react";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header
          isSignedIn={isSignedIn}
          onSignOut={() => setIsSignedIn(false)}
        />
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <Auth onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
