import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Healthy from "./products/healthyCookies";
import Cookie from "./products/cookie";
import Drinks from "./products/drink";
import Others from "./products/others"
import Home from './Home'
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
              <Link to="/products/healthy">Healthy Cookies</Link>
            </button>
            <button>
              <Link exact to="/products/drinks">Drinks</Link>
            </button>
            <button>
              <Link exact to="/products/others">Others</Link>
            </button>
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              {" "}
              <Home />{" "}
            </Route>
            <Route path="/products/healthy">
              {" "}
              <Healthy />{" "}
            </Route>
            <Route path="/products/cookie">
              {" "}
              <Cookie />{" "}
            </Route>
            <Route path="/products/drinks">
              {" "}
              <Drinks />{" "}
            </Route>
            <Route path="/products/others">
              {" "}
              <Others />{" "}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
