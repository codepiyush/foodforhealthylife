import React from "react";
import Display from "./display";
import TopNav from '../nav';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Healthy extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div id="healthy"></div>
        <TopNav />
        <div>
          <Switch>
            <Route exact path="/products/healthy">
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
      biscuit: [
        {
          images: [
            require("../images/picture/BuckN'Flax Cookies 100g.jpg"),
            require("../images/picture/BuckN'Flax Cookies 200g.jpg")
          ],
          name: "BuckN'Flax Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/ChocoChip Cookies 100g.jpg"),
            require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "ChocoChip Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/FruitN'Nuts Cookies 100g.jpg"),
            require("../images/picture/FruitN'Nut Cookies 200g.jpg")
          ],
          name: "FruitN'Nut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/HoneyN'Oatmeal 100g.jpg"),
            require("../images/picture/HoneyN'Oatmeal Cookies 200g.jpg")
          ],
          name: "HoneyN'Oatmeal Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/WaterChestNut 100g.jpg"),
            require("../images/picture/WaterChestNut Cookies 200g.jpg")
          ],
          name: "WaterChestNut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/Protein Cookies 100g.jpg"),
            require("../images/picture/Protein Cookies 200g.jpg")
          ],
          name: "Protein Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/BUCKWHEAT COOKIEE.jpg"),
            require("../images/picture/P-4.png")
          ],
          name: "Buckwheat Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/ProteinCookiee.jpg"),
            require("../images/picture/ProteinCookiee.jpg")
          ],
          name: "Protein Cookiee",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        },
        {
          images: [
            require("../images/picture/P-5.png"),
            require("../images/picture/P-5.png")
          ],
          name: "WaterChestNut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat"
            ],

          }
        }
      ]
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        <div className="display-main">
          {this.state.biscuit.map(biscuit => {
            return <Display desc={{ ...biscuit }} />;
          })}
        </div>
      </div>
    );
  }
}


export default Healthy;
