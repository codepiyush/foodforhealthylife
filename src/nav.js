import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";


class TopNav extends React.Component {
    render() {
        return (
            <div className="nav2">
                <div className="head-cont">
                    <p className="heading">Our Products</p>
                </div>
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
        )
    }
}

export default TopNav;