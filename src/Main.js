import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Healthy from "./products/healthyCookies";
import Cookie from "./products/cookie";
import Drinks from "./products/drink";
import Others from "./products/others"
import Home from './Home';
import About from './About';
import Presence from './Presence'
import Landing from './Landing'
import TopNav from './nav'

class Main extends React.Component {
  render() {
    return (
      <div className="main" id="home">
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Home />
          </Route>
          <Route path="/products/healthy">
            <Healthy />
          </Route>
          <Route path="/products/cookie">
            <Cookie />
          </Route>
          <Route path="/products/drinks">
            <Drinks />
          </Route>
          <Route path="/products/others">
            <Others />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/presence">
            <Presence />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
