import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TopNav from '../nav'

class Others extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div id="others"></div>
                <TopNav />
                <div>
                    <Switch>
                        <Route exact path="/products/others">
                            <Normal />
                        </Route>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
class Normal extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    images: [
                        require("../images/picture/Puffy Hearts 300g.jpg"),
                        require("../images/picture/Puffy Hearts 300g.jpg"),
                    ],
                    name: "Puffy Hearts",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px",
                    detailBox: {
                        type: "upcomming",
                        calories: 538,
                        name: [
                            "Total Fat",
                            "Total Carbohydrates",
                            "Sugar",
                            "Protein",
                            "Trans Fat",
                            "Saturated Fat"
                        ],
                        value: [
                            "30gm",
                            "58gm",
                            "14gm",
                            "8gm",
                            "5gm",
                            "40-60gm"
                        ]
                    }
                },
                {
                    images: [
                        require("../images/picture/CakeRusk 300 g.jpg"),
                        require("../images/picture/CakeRusk 300 g.jpg"),
                    ],
                    name: "Cake Rusk",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px",
                    detailBox: {
                        type: "upcomming",
                        calories: 538,
                        name: [
                            "Total Fat",
                            "Total Carbohydrates",
                            "Sugar",
                            "Protein",
                            "Trans Fat",
                            "Saturated Fat"
                        ],
                        value: [
                            "30gm",
                            "58gm",
                            "14gm",
                            "8gm",
                            "5gm",
                            "40-60gm"
                        ]
                    }

                },
                {
                    images: [
                        require("../images/picture/10. Fruit Cake Rusk 300 g.jpg"),
                        require("../images/picture/10. Fruit Cake Rusk 300 g.jpg"),
                    ],
                    name: "Fruit Cake",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px",
                    detailBox: {
                        type: "upcomming",
                        calories: 538,
                        name: [
                            "Total Fat",
                            "Total Carbohydrates",
                            "Sugar",
                            "Protein",
                            "Trans Fat",
                            "Saturated Fat"
                        ],
                        value: [
                            "30gm",
                            "58gm",
                            "14gm",
                            "8gm",
                            "5gm",
                            "40-60gm"
                        ]
                    }

                },
                {
                    images: [
                        require("../images/picture/11. Coconut Macaroon 250g.jpg"),
                        require("../images/picture/11. Coconut Macaroon 250g.jpg"),
                    ],
                    name: "Coconut Macaroon",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px",
                    detailBox: {
                        type: "upcomming",
                        calories: 538,
                        name: [
                            "Total Fat",
                            "Total Carbohydrates",
                            "Sugar",
                            "Protein",
                            "Trans Fat",
                            "Saturated Fat"
                        ],
                        value: [
                            "30gm",
                            "58gm",
                            "14gm",
                            "8gm",
                            "5gm",
                            "40-60gm"
                        ]
                    }
                },
                {
                    images: [
                        require("../images/picture/12. Puff Fans 300 g.jpg"),
                        require("../images/picture/12. Puff Fans 300 g.jpg"),
                    ],
                    name: "Puff fans",
                    detail: ["Hand Made Classics", "Eggless"],
                    width: "220px",
                    detailBox: {
                        type: "upcomming",
                        calories: 538,
                        name: [
                            "Total Fat",
                            "Total Carbohydrates",
                            "Sugar",
                            "Protein",
                            "Trans Fat",
                            "Saturated Fat"
                        ],
                        value: [
                            "30gm",
                            "58gm",
                            "14gm",
                            "8gm",
                            "5gm",
                            "40-60gm"
                        ]
                    }
                },
            ]
        };
    }
    render() {
        return (
            <React.Fragment>
                <div className="normal-biscuit">
                    <div className="display-main">
                        {this.state.products.map(product => {
                            return <Display desc={{ ...product }} />;
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Others;
