import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Marketing from "./components/Marketing";
import Header from "./components/Header";
import Auth from "./components/Auth";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" component={Marketing} />
        </Switch>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
