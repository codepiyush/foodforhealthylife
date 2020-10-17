import React from "react";
import Display from "./display";
import TopNav from "../nav";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Drinks extends React.Component {
  render() {
    return (
      <React.Fragment>
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
            require("../images/picture/edited3.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "Orange Flaour"],
          detailBox: {
            type: "energyDrink",
            nutriFacts: [
              "Water",
              "Sugar",
              "Dextrose",
              "Acidity Regulator",
              "Permitted Preservative",
              "Minerals Salt & Vitamins",
            ],
          },
        },
        {
          images: [
            require("../images/picture/edited4.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "BlueBerry Flavour"],
          detailBox: {
            type: "energyDrink",
            nutriFacts: [
              "Water",
              "Sugar",
              "Dextrose",
              "Acidity Regulator",
              "Permitted Preservative",
              "Minerals Salt & Vitamins",
            ],
          },
        },
        {
          images: [
            require("../images/picture/edited5.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Bounce Back",
          detail: ["Healthy Energy Drink", "Lemon Flavour"],
          detailBox: {
            type: "energyDrink",
            nutriFacts: [
              "Water",
              "Sugar",
              "Dextrose",
              "Acidity Regulator",
              "Permitted Preservative",
              "Minerals Salt & Vitamins",
            ],
          },
        },
        {
          images: [
            require("../images/picture/edited2.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "BlueBerry Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited6.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Peach Smooth Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited1.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Refreshing Cola Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited7.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Strawberry Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited8.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Lemon Mojito Flavour",
          detail: ["Brewed Ice Tea"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited9.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Original Tea",
          detail: ["Brewed Ice Tea", "No added flavour"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
        {
          images: [
            require("../images/picture/edited10.png"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Green Apple Flavour",
          detail: ["Brewed Ice Tea", "Smooth Flavour"],
          detailBox: {
            type: "iceTea",
            calories: 28,
            name: ["Protein", "Fat", "Total Carbs", "Sugar"],
            value: ["0gm", "0gm", "7gm", "7gm"],
          },
        },
      ],
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        <div className="display-main">
          {this.state.drinks.map((drink) => {
            return <Display desc={{ ...drink }} />;
          })}
        </div>
      </div>
    );
  }
}

export default Drinks;
