import React, { Component } from "react";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <img src={require("./images/Kingdom.png")} alt="" />
                </div>
                <div className="menu">
                    <div className="menuContainer">
                        <div className="sideMenuExtra">
                            <i class="fas fa-shopping-cart"></i>
                            <p>Our Products</p>
                        </div>
                        <div className="sidecontent">
                            <div className="smitem">Cookies</div>
                            <div className="smitem">Sports Drinks</div>
                            <div className="smitem">Ice Tea</div>
                            <div className="smitem">Biscuits</div>
                            <div className="smitem">NutriBar</div>
                        </div>
                    </div>
                    <div className="menuContainer">
                        <i class="fas fa-users"></i>
                        <p>About us</p>
                    </div>
                    <div className="menuContainer">
                        <i class="fas fa-envelope"></i>
                        <p>Contact us</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sidebar;