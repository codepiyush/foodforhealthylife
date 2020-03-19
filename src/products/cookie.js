import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Cookie extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/products/cookie">
            <Normal />
          </Route>
          <Route exact path="/products/cookie/premium">
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
      cookies: [
        {
          images: [
            require("../images/picture/R2.png"),
            require("../images/picture/1.png")
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"]
        },
        {
          images: [
            require("../images/picture/R6.png"),
            require("../images/picture/5.png")
          ],

          name: "Almond Finger Cookies",
          detail: ["Hand Crafted", "Eggless"]
        },
        {
          images: [
            require("../images/picture/R7.png"),
            require("../images/picture/Prm-OM2.jpg")
          ],

          name: "Oatmeal Chocochip Cookies",
          detail: ["Hand Crafted", "Eggless"]
        },
        {
          images: [
            require("../images/picture/R9.png"),
            require("../images/picture/8.png")
          ],

          name: "Milky Chocochip Cookies",
          detail: ["Hand Crafted", "Eggless"]
        },
        {
          images: [
            require("../images/picture/R4.png"),
            require("../images/picture/3.png")
          ],

          name: "Basen Pistachio Khatai",
          detail: ["Hand Crafted", "Eggless"]
        },
        {
          images: [
            require("../images/picture/R11.png"),
            require("../images/picture/10.png")
          ],

          name: "Basen Pistachio Khatai",
          detail: ["Hand Crafted", "Eggless"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="normal-cookie" >
        <div id="cookie"></div>
        <Link to="/products/cookie/premium">
          <button className="premium-button">
            <span><i className="fas fa-crown"></i> &nbsp; Premium Cookies</span>
          </button>
        </Link>
        <div className="display-main">
          {this.state.cookies.map(cookie => {
            return <Display desc={{ ...cookie }} />;
          })}
        </div>
      </div>
    );
  }
}
class Premium extends React.Component {
  constructor() {
    super();
    this.state = {
      cookies: [
        {
          images: [
            require("../images/picture/R2.png"),
            require("../images/picture/R2.png")
          ],

          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"]
        }
      ]
    };
  }
  render() {
    return (
      <div className="normal-cookie">
        <Link to="/products/cookie/premium">
          <button className="premium-button">
            <span>Premium Cookies</span>
          </button>
        </Link>
        <div>
          {this.state.cookies.map(cookie => {
            return <Display desc={{ ...cookie }} />;
          })}
        </div>
      </div>
    );
  }
}
export default Cookie;
