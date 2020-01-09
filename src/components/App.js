import React from "react";
import MainPage from "./MainPage";
import Landing from "./Landing";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/main-page" component={MainPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
