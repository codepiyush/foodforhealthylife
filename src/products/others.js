import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TopNav from "../nav";

class Others extends React.Component {
  render() {
    return (
      <React.Fragment>
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
      products: [
        {
        image:require("../images/picture/GINGER LEMON.jpg"),
      },
      {
        image:require("../images/picture/GINGER TURMERIC.jpg"),
      },
    ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="upcomming">
          <img src={this.state.products[0].image} alt="Upcomming"/>
          <img src={this.state.products[1].image} alt="Upcomming"/>
        </div>
      </React.Fragment>
    );
  }
}

export default Others;
