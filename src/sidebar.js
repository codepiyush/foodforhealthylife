import React, { Component } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import mypdf from "../src/CatalogBakkiicookii.pdf";
// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src={require("./images/BakkiicookiiLogo.png")}
          alt="Bakkii cookii"
        />
        <img src={require("./images/Kingdom.png")} alt="KingdomFood" />
        <img src={require("./images/FortiRichNEWLogo.png")} alt="Fortirich" />
      </div>
      <div className="menu">
        <div className="menuContainer">
          <Link to="/products#home" activeClassName="sidebarSelected">
            <div className="sideMenuExtra">
              <div>
                <i class="fas fa-shopping-cart"></i>
              </div>
              <div>
                <p>Our Products</p>
              </div>
            </div>
          </Link>
          <div className="sidecontent">
            <Link smooth to="/products/cookie#cookie">
              <div className="smitem">Cookie</div>
            </Link>
            <Link smooth to="/products/drinks#drinks">
              <div className="smitem" id="sportsd">
                Drinks
              </div>
            </Link>
            <Link smooth to="/products/healthy#healthy">
              <div className="smitem">Healthy Cookies</div>
            </Link>
            <Link smooth to="/products/others#others">
              <div className="smitem">Upcomming Products</div>
            </Link>
          </div>
        </div>
        <div className="menuContainer">
          <Link smooth to="/about#about" activeClassName="sidebarSelected">
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-users"></i>
              </div>
              <div>
                <p>About us</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="menuContainer">
          <Link smooth to="/presence" activeClassName="sidebarSelected">
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <div>
                <p>Our Presence</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="menuContainer">
          <a href={mypdf} target="_blank" rel="noopener noreferrer" download>
            <div className="sideMenuLink">
              <div>
                <i className="fas fa-download"></i>
              </div>
              <div>
                <p>Catalog</p>
              </div>
            </div>
          </a>
        </div>
        <div className="menuContainer">
          <a href={`#contact`}>
            <div className="sideMenuLink">
              <div>
                <i class="fas fa-envelope"></i>
              </div>
              <div>
                <p> Contact us</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
