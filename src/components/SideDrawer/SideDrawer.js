import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import mypdf from "/home/atul/foodforhealthylife/src/CatalogBakkiicookii.pdf";

class sideDrawer extends React.Component {
  render() {
    let drawerclasses = "side_drawer";
    if (this.props.show) {
      drawerclasses = "side_drawer open";
    }
    return (
      <div>
        <div className={drawerclasses}>
          <div className="menu">
            <div className="logo">
              <img
                src={require("/home/atul/foodforhealthylife/src/images/BakkiicookiiLogo.png")}
                alt="Bakkii cookii"
              />
              <img
                src={require("/home/atul/foodforhealthylife/src/images/Kingdom.png")}
                alt="KingdomFood"
              />
              <img
                src={require("/home/atul/foodforhealthylife/src/images/FortiRichNEWLogo.png")}
                alt="Fortirich"
              />
            </div>
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
              <a
                href={mypdf}
                target="_blank"
                rel="noopener noreferrer"
                download
              >
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
      </div>
    );
  }
}
export default sideDrawer;
