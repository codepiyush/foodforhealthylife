import React from "react";
import Display from "./display";
import TopNav from '../nav';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Drinks extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div id="drinks"></div>
        <TopNav />
        <div>
          <Switch>
            <Route exact path="/products/drinks">
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
      drinks: [
        {
          images: [
            require("../images/picture/edited3.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "Orange Flaour"],
          detailBox: {
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
            require("../images/picture/edited4.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "BlueBerry Flavour"],
          detailBox: {
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
            require("../images/picture/edited5.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "Lemon Flavour"],
          detailBox: {
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
            require("../images/picture/edited2.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "BlueBerry Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
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
            require("../images/picture/edited6.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Peach Smooth Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
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
            require("../images/picture/edited1.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Refreshing Cola Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
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
            require("../images/picture/edited7.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Strawberry Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
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
            require("../images/picture/edited8.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Lemon Mojito Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
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
            require("../images/picture/edited9.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Original Tea",
          detail: ["Brewed Ice Tea", "No added flavour"],
          detailBox: {
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
            require("../images/picture/edited10.png")
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Green Apple Flavour",
          detail: ["Brewed Ice Tea", "Smooth Flavour"],
          detailBox: {
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
        }
      ]
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        <div className="display-main">
          {this.state.drinks.map(drink => {
            return <Display desc={{ ...drink }} />;
          })}
        </div>
      </div>
    );
  }
}

export default Drinks;
