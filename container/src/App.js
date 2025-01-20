import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Header from "./components/Header";

const Marketing = lazy(() => import("./components/Marketing"));
const Auth = lazy(() => import("./components/Auth"));

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/" component={Marketing} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
