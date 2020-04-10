import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";

// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="logo">
          <img src={require("./images/Kingdom.png")} alt="" />
          <img src={require("./images/FortiRich.jpg")} alt="" />
          <img src={require("./images/Kings.png")} alt="" />
        </div>
        <div className="menu">
          <div className="menuContainer">
            <div className="sideMenuExtra">
              <div>
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div>
                <p>Our Products</p>
              </div>
            </div>
            <div className="sidecontent">
              <div className="smitem">
                {" "}
                <Link to="/products/cookie#cookie">Cookie</Link>
              </div>
              <div className="smitem" id="sportsd">
                <Link to="/products/drinks#drinks">Drinks</Link>
              </div>
              <div className="smitem">
                <Link to="/products/healthy#healthy">Healthy Cookies</Link>
              </div>
              <div className="smitem">
                <Link to="/products/others#others">Upcomming Products</Link>
              </div>
            </div>
          </div>
          <div className="menuContainer">
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-users"></i>
              </div>
              <div>
                <p>
                  <Link to="/about#about">About us</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="menuContainer">
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <div>
                <p>
                  <Link to="/presence">Our Presence</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="menuContainer">
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <p>
                  {" "}
                  <a href="#contact"> Contact us </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
