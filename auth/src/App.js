import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignIn from "./components/Signin";
import Signup from "./components/Signup";

const generateClassname = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassname}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={SignIn}>
              <SignIn onSignIn={onSignIn} />
            </Route>

            <Route path="/auth/signup" component={Signup}>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
