import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

class Sidebar extends Component {

    onClickSport() {
        document.getElementById('some').click();
    }
    render() {
        return (
            <div className="sidebar">
                <div className="logo">
                    <img src={require("./images/Kingdom.png")} alt="" />
                </div>
                <div className="menu">
                    <div className="menuContainer">
                        <a href="#products" id='some'>
                            <div className="sideMenuExtra">
                                <i class="fas fa-shopping-cart"></i>
                                <p>Our Products</p>
                            </div>
                        </a>
                        <div className="sidecontent">
                            <div className="smitem" onClick={this.onClickSport}> <Link to='/products/cookie'>Cookie</Link></div>
                            <div className="smitem" id='sportsd' onClick={this.onClickSport}>Sports Drinks</div>
                            <div className="smitem" onClick={this.onClickSport}>Ice Tea</div>
                            <div className="smitem" onClick={this.onClickSport}><Link to='/products/biscuit'>Biscuit</Link></div>
                            <div className="smitem" onClick={this.onClickSport}>Nutri Bar</div>
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