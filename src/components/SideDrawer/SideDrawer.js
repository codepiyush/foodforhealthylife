import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import mypdf from "../../CatalogBakkiicookii.pdf";

class sideDrawer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     sidecontentView:"" 
  //   }
  // }
  // handleProductToggle = () => {
  //   this.setState((prevState) => {
  //     if (prevState.sidecontentView == "") {
  //       return({sidecontentView:"sidecontentshow"})
  //     }
  //     else {
  //       return({sidecontentView:""})
  //     }
  //   })
  // }
  // componentDidMount(){
  //   window.addEventListener('click', ()=>{
  //     this.setState({sidecontentView:""})
  //   })
  // }
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
                src={require("../../images/BakkiicookiiLogo.png")}
                alt="Bakkii cookii"
              />
              <img
                src={require("../../images/Kingdom.png")}
                alt="KingdomFood"
              />
              <img
                src={require("../../images/FortiRichNEWLogo.png")}
                alt="Fortirich"
              />
            </div>
            <div className="menuContainer">
              <div className="productToggle">
                <div>
                  <Link onClick={this.props.closeDrawer} to="/products#home" activeClassName="sidebarSelected">
                    <div className="sideMenuExtra">
                      <div>
                        <i class="fas fa-shopping-cart"></i>
                      </div>
                      <div>
                        <p>Our Products</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div id="productToggleButton" onClick={this.props.handleProductToggle}> <i class="fas fa-angle-right"></i></div>
              </div>
              <div className={`sidecontent ${this.props.sidecontentView}`}>
                <Link smooth onClick={this.props.closeDrawer} to="/products/cookie#home">
                  <div className="smitem">Cookie</div>
                </Link>
                <Link smooth onClick={this.props.closeDrawer} to="/products/drinks#home">
                  <div className="smitem" id="sportsd">
                    Drinks
                  </div>
                </Link>
                <Link smooth onClick={this.props.closeDrawer} to="/products/healthy#home">
                  <div className="smitem">Healthy Cookies</div>
                </Link>
                <Link smooth onClick={this.props.closeDrawer} to="/products/others#home">
                  <div className="smitem">Upcomming Products</div>
                </Link>
              </div>
            </div>
            <div className="menuContainer">
              <Link smooth onClick={this.props.closeDrawer} to="/about#home" activeClassName="sidebarSelected">
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
              <Link smooth onClick={this.props.closeDrawer} to="/presence" activeClassName="sidebarSelected">
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
              <a href={`#contact`} onClick={this.props.closeDrawer}>
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
