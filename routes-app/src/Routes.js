import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAlbum from "./AddAlbum";
import Albums from "./Albums";
import App from "./App";
import Navbar from "./Navbar";

const Routes = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/albums" exact component={Albums} />
          <Route path="/form" component={AddAlbum} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;