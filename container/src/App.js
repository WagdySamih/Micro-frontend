import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Marketing from "./components/Marketing";
import Header from "./components/Header";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassname}>
        <Header />
        <Marketing />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
