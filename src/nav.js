import React from 'react'
import { NavHashLink as Link } from "react-router-hash-link";

// import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


class TopNav extends React.Component {
    render() {
        return (
            <div className="nav2">
                <Link to="/products#home">
                    <div className="head-cont">
                        <p className="heading">Our Products</p>
                    </div>
                </Link>
                <div className="products" id="products">

                    <Link to="/products/cookie#home" activeClassName="navbarSelected"><button className="navbutton">Cookie</button></Link>


                    <Link to="/products/healthy#home" activeClassName="navbarSelected"> <button className="navbutton">Healthy Cookies</button></Link>


                    <Link exact to="/products/drinks#home" activeClassName="navbarSelected"><button className="navbutton">Drinks</button></Link>


                    <Link exact to="/products/others#home" activeClassName="navbarSelected"><button className="navbutton highlight">Upcomming Products</button></Link>

                </div>
            </div>
        )
    }
}

export default TopNav;