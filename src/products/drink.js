import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Drinks extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/products/drinks">
            <Normal />
          </Route>
        </Switch>
      </div>
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
            require("../images/picture/Ice Tea - Latest.jpg"),
            // require("../images/picture/BuckN'Flax Cookies 200g.jpg")
          ],
          name: "Ice Tea",
          detail: ["Hand Made Classics", "Eggless"]
        },
        {
          images: [
            require("../images/picture/Energy Drink.jpg"),
            // require("../images/picture/ChocoChip Cookies 200g.jpg")
          ],
          name: "Energy Drink",
          detail: ["Hand Made Classics", "Eggless"]
        },
        
      ]
    };
  }
  render() {
    return (
      <div className="normal-biscuit">
        {/* <Link to="/products/biscuit/premium">
          <button className="premium-button">
            <span>Healthy Cookies</span>
          </button>
        </Link> */}
        <div className="display-main">
          {this.state.drinks.map(drink => {
            return <Display desc={{ ...drink }} />;
          })}
          {/* <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/>
                      <Display desc = {{imageUrl: require('../images/picture/R2.png'), name: 'Coconut Cookie', detail: ['Hand Crafted', 'Eggless', "Suger Free"]}}/> */}
        </div>
      </div>
    );
  }
}


export default Drinks;
