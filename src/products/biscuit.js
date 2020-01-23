import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Biscuits extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/products/biscuit">
            <Normal />
          </Route>
          <Route exact path="/products/biscuit/premium">
            <Premium />
          </Route>
        </Switch>
      </div>
    );
  }
}
class Normal extends React.Component {
  constructor() {
    super();
    this.state = {
      biscuit: [
        {
          imageUrl: require("../images/picture/JeeraCookies.png"),
          name: "Jeera Cookie",
          detail: ["Hand Crafted", "Eggless", "Suger Free"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        <Link to="/products/biscuit/premium">
          <button className="premium-button">
            <span>Biscuits</span>
          </button>
        </Link>
        <div style={{ marginTop: "50px", display: "flex" }}>
          {this.state.biscuit.map(cookie => {
            return <Display desc={{ ...cookie }} />;
          })}
          {/* <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/>
                      <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/> */}
        </div>
      </div>
    );
  }
}
class Premium extends React.Component {
  render() {
    return <div>Biscuits</div>;
  }
}

export default Biscuits;
