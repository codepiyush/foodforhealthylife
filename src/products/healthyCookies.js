import React from "react";
import Display from "./display";
import TopNav from "../nav";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Healthy extends React.Component {
  render() {
    return (
      <React.Fragment>
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
            require("../images/picture/BuckN'Flax Cookies 200g.jpg"),
          ],
          name: "BuckN'Flax Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Protein",
              "High Fibre",
              "Rich Omega-03",
              "Rich Omega-06",
              "Rich in Vitamin",
              "Rich in Micro Nutrients",
            ],
          },
        },
        {
          images: [
            require("../images/picture/ChocoChip Cookies 100g.jpg"),
            require("../images/picture/ChocoChip Cookies 200g.jpg"),
          ],
          name: "ChocoChip Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Rich in Antioxident",
              "Rich in Vitamin",
              "Rich in Micro NUtrients",
              "Rich in Minerals",
            ],
          },
        },
        {
          images: [
            require("../images/picture/FruitN'Nuts Cookies 100g.jpg"),
            require("../images/picture/FruitN'Nut Cookies 200g.jpg"),
          ],
          name: "FruitN'Nut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Booster For Brain",
              "Rich in Fibre",
              "Rich in Vitamin",
              "Rich in Minerals",
              "Rich in Micro Nutrients",
            ],
          },
        },
        {
          images: [
            require("../images/picture/HoneyN'Oatmeal 100g.jpg"),
            require("../images/picture/HoneyN'Oatmeal Cookies 200g.jpg"),
          ],
          name: "HoneyN'Oatmeal Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "Rich in Antioxident",
              "Rich in Fibre",
              "Rich in Micro Nutrients",
              "Rich in Minerals",
            ],
          },
        },
        {
          images: [
            require("../images/picture/WaterChestNut 100g.jpg"),
            require("../images/picture/WaterChestNut Cookies 200g.jpg"),
          ],
          name: "WaterChestNut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Potassium",
              "Rich Magnese",
              "Rich Vitamin C",
              "Rich in Fibre",
            ],
          },
        },
        {
          images: [
            require("../images/picture/Protein Cookies 100g.jpg"),
            require("../images/picture/Protein Cookies 200g.jpg"),
          ],
          name: "Protein Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Protein",
              "High Fibre",
              "Rich in Vitamin",
              "Rich in Micro Nutrient",
              "Rich in Minerals",
            ],
          },
        },
        {
          images: [
            require("../images/picture/BUCKWHEAT COOKIEE.jpg"),
            require("../images/picture/P-4.png"),
          ],
          name: "Buckwheat Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Protein",
              "High Fibre",
              "Rich in Vitamin",
              "Rich in Micro Nutrient",
              "Rich in Minerals",
            ],
          },
        },
        {
          images: [
            require("../images/picture/ProteinCookiee.jpg"),
            require("../images/picture/ProteinCookiee.jpg"),
          ],
          name: "Protein Cookiee",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Protein",
              "High Fibre",
              "Rich in Vitamin",
              "Rich in Micro Nutrient",
              "Rich in Minerals",
            ],
          },
        },
        {
          images: [
            require("../images/picture/P-5.png"),
            require("../images/picture/P-5.png"),
          ],
          name: "WaterChestNut Cookies",
          detail: ["Hand Made Classics", "Eggless"],
          detailBox: {
            type: "healthy",
            nutriFacts: [
              "High Potassium",
              "Rich Magnese",
              "Rich Vitamin C",
              "Rich in Fibre",
            ],
          },
        },
        {
          images: [
            require("../images/picture/11. Coconut Macaroon 250g.jpg"),
            require("../images/picture/11. Coconut Macaroon 250g.jpg"),
          ],
          name: "Coconut Macaroon",
          detail: ["Hand Made Classics", "Eggless", "Gluten Free"],
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
              "Saturated Fat",
            ],
            value: ["30gm", "58gm", "14gm", "8gm", "5gm", "40-60gm"],
          },
        },
      ],
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        <div className="display-main">
          {this.state.biscuit.map((biscuit) => {
            return <Display desc={{ ...biscuit }} />;
          })}
        </div>
      </div>
    );
  }
}

export default Healthy;
