import React from "react";
import Display from "./display";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import TopNav from "../nav";

class Cookie extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Switch>
            <Route exact path="/products/cookie">
              <Normal />
            </Route>
            <Route exact path="/products/cookie/premium">
              <Premium />
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
      cookies: [
        {
          images: [
            require("../images/picture/DryFruits Cookies 300 g.jpg"),
            require("../images/picture/dryfruitcookies.png"),
          ],
          name: "Dry Fruit Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
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
        {
          images: [
            require("../images/picture/4. Jeera Cookies 300 g.jpg"),
            require("../images/picture/JeeraCookies.png"),
          ],

          name: "Jeera Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["32gm", "60gm", "18gm", "6gm", "5gm", "45-60gm"],
          },
        },
        {
          images: [
            require("../images/picture/6. BesanPistachio Khatai 300g.jpg"),
            require("../images/picture/6. BesanPistachio Khatai 300g.jpg"),
          ],

          name: "Besan Pistachio Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["30gm", "62gm", "16gm", "6gm", "5gm", "45-60gm"],
          },
        },
        {
          images: [
            require("../images/picture/8. Badam Bites Cookies 300g.jpg"),
            require("../images/picture/8. Badam Bites Cookies 300g.jpg"),
          ],

          name: "Badam Bites Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["30gm", "62gm", "17gm", "6gm", "5gm", "45-60gm"],
          },
        },
        {
          images: [
            require("../images/picture/Product Pic-7.jpg"),
            require("../images/picture/Product Pic-7.jpg"),
          ],

          name: "Ajwain Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["32gm", "60gm", "16gm", "6gm", "5gm", "45-60gm"],
          },
        },
        {
          images: [
            require("../images/picture/Product Pic-9.jpg"),
            require("../images/picture/Product Pic-9.jpg"),
          ],

          name: "Atta Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["30gm", "60gm", "18gm", "6gm", "5gm", "45-60gm"],
          },
        },
        {
          images: [
            require("../images/picture/Product Pic-14.jpg"),
            require("../images/picture/Product Pic-14.jpg"),
          ],

          name: "Milk Choco Cookies",
          detail: ["Hand Crafted", "Eggless"],
          width: "220px",
          detailBox: {
            type: "normal",
            calories: 538,
            name: [
              "Total Fat",
              "Total Carbohydrates",
              "Sugar",
              "Protein",
              "Trans Fat",
              "Saturated Fat",
            ],
            value: ["32gm", "60gm", "18gm", "6gm", "5gm", "45-60gm"],
          },
        },
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
              "Saturated Fat",
            ],
            value: ["30gm", "58gm", "14gm", "8gm", "5gm", "40-60gm"],
          },
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
              "Saturated Fat",
            ],
            value: ["30gm", "58gm", "14gm", "8gm", "5gm", "40-60gm"],
          },
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
              "Saturated Fat",
            ],
            value: ["30gm", "58gm", "14gm", "8gm", "5gm", "40-60gm"],
          },
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
      <div className="cookie-container">
        <div className="normal-cookie">
          <div className="display-main">
            {this.state.cookies.map((cookie) => {
              return <Display desc={{ ...cookie }} />;
            })}
          </div>
        </div>
        <div className="premium-sec">
          <Premium />
        </div>
        <div className="gift-sec">
          <Gift />
        </div>
      </div>
    );
  }
}
class Premium extends React.Component {
  constructor() {
    super();
    this.state = {
      cookies: [
        {
          images: [
            require("../images/picture/R2.png"),
            require("../images/picture/1.png"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line:
              "Oozing with rich desiccated cocunut filling melting in the mouth & crunchy under the teeth",
          },
        },
        {
          images: [
            require("../images/picture/R6.png"),
            require("../images/picture/5.png"),
          ],

          name: "Almond Finger Cookies",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line:
              "Premium Almonds slice and goodness of Milk Butter come together for these dreamy cookies",
          },
        },
        {
          images: [
            require("../images/picture/R7.png"),
            require("../images/picture/Prm-OM2.jpg"),
          ],

          name: "Oatmeal Chocochip Cookies",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line:
              "Yumminess of cookies with Richness of Oatmeal Crushed Peanuts with twist of Chocochips",
          },
        },
        {
          images: [
            require("../images/picture/R9.png"),
            require("../images/picture/8.png"),
          ],

          name: "Milky Chocochip Cookies",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line:
              "Luscious chunks of Chocochip and Milk Butter are united for an ‘insanly great’ taste",
          },
        },
        {
          images: [
            require("../images/picture/R11.png"),
            require("../images/picture/10.png"),
          ],

          name: "Desi Ghee Atta Cookies",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line:
              "This traditional Punjabi Atta Cookies is Crafted for you with Desi Ghee && love",
          },
        },
        {
          images: [
            require("../images/picture/R4.png"),
            require("../images/picture/3.png"),
          ],

          name: "Basen Pistachio Khatai",
          detail: ["Hand Crafted", "Eggless"],
          detailBox: {
            type: "premium",
            line: "Deliciousness of Nankhatai with a twist of Pistachio flakes",
          },
        },
      ],
    };
  }
  render() {
    return (
      <div className="premium-cookie" id="premium-cookie">
        <div></div>
        <div className="title-center">
          <div className="premium-title">
            <span>
              <i className="fas fa-crown"></i> &nbsp; Premium Cookies
            </span>
          </div>
        </div>
        <div className="display-main">
          {this.state.cookies.map((cookie) => {
            return <Display desc={{ ...cookie }} />;
          })}
        </div>
      </div>
    );
  }
}
class Gift extends React.Component {
  constructor() {
    super();
    this.state = {
      cookies: [
        {
          images: [
            require("../images/picture/G-1.jpg"),
            // require("../images/picture/G-1.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-2.jpg"),
            // require("../images/picture/G-2.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-3.jpg"),
            // require("../images/picture/G-3.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-4.jpg"),
            // require("../images/picture/G-4.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-5.jpg"),
            // require("../images/picture/G-5.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-6.jpg"),
            // require("../images/picture/G-6.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-7.jpg"),
            // require("../images/picture/G-7.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-8.jpg"),
            // require("../images/picture/G-8.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
        {
          images: [
            require("../images/picture/G-9.jpg"),
            // require("../images/picture/G-9.jpg"),
          ],
          name: "Coconut Cookie",
          detail: ["Hand Crafted", "Eggless"],
          width: "320px",
          height: "210px",
          OuterWidth: "350px",
          detailBox: {
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
      <div className="gift-pack">
        <div id="giftpack"></div>
        <div className="title-center">
          <div className="gift-title">
            <span>
              <i class="fas fa-gifts"></i> &nbsp; Gift Pack
            </span>
          </div>
        </div>
        <div className="display-main">
          {this.state.cookies.map((cookie) => {
            return <Display desc={{ ...cookie }} />;
          })}
        </div>
      </div>
    );
  }
}
export default Cookie;
