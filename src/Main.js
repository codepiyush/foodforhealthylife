import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Biscuits from "./products/biscuit";
import Cookie from "./products/cookie";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="nav2">
          <div className="head-cont">
            <p className="heading">Our Products</p>
          </div>
          {/* <hr /> */}
          <div className="products" id="products">
            <button>
              <Link to="/products/cookie">Cookie</Link>
            </button>
            <button>
              <Link to="/products/biscuit">Biscuit</Link>
            </button>
            <button>Energy Drink</button>
            <button>Nutri Bar</button>
            <button>Ice Tea</button>
          </div>
        </div>
        <div>
          <Switch>
            <Route path="/products/biscuit">
              {" "}
              <Biscuits />{" "}
            </Route>
            <Route path="/products/cookie">
              {" "}
              <Cookie />{" "}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
