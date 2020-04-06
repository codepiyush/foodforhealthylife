import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TopNav from "../nav";

class Others extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="others"></div>
        <TopNav />
        <div>
          <Switch>
            <Route exact path="/products/others">
              <Normal />
            </Route>
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
class Normal extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="normal-biscuit">
          <div className="display-main">
            {this.state.products.map((product) => {
              return <Display desc={{ ...product }} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Others;
