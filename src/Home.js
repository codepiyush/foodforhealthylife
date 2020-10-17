import React from "react";
import Display from "./products/display";
import { HashLink as Link } from "react-router-hash-link";
import TopNav from "./nav";
import Landing from "./Landing";


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        require("./images/picture/Range of Gift Packs.jpg"),
        require("./images/picture/Premium Range.jpg"),
        require("./images/picture/Fortified Range.jpg"),
        require("./images/picture/Main Range of Cookies.jpg"),
        require("./images/picture/Ice Tea - Latest.jpg"),
        require("./images/picture/Protein cookies.jpg"),
        require("./images/picture/Energy Drink.jpg"),
        // require("./images/picture/IMG_20190527_154530.jpg"),
        // require("./images/picture/IMG_20190527_154547.jpg"),
        // require("./images/picture/IMG_20190527_154623.jpg"),
        // require("./images/picture/IMG_20190527_154713.jpg"),
        // require("./images/picture/IMG_20190527_154751.jpg")
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Landing />

        {/* <TopNav /> */}

        <div className="display-home">
          <div className="col">
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/cookie#premium-cookie">
                  <p className="home-img-text">Premium Cookies</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Premium Range.jpg")}
                alt="bakki cookii Premium Range"
              />
            </div>
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/drinks">
                  <p className="home-img-text">Drinks- Ice tea</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Ice Tea - Latest.jpg")}
                alt="bakki cookki Ice tea"
              />
            </div>
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/cookie">
                  <p className="home-img-text">Cookies</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Main Range of Cookies.jpg")}
                alt="bakkii cookii Main Range of Coockies"
              />
            </div>
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/healthy">
                  <p className="home-img-text">Healthy Cookies</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Fortified Range.jpg")}
                alt="bakki cookki Fortified Range"
              />
            </div>
          </div>
          <div className="col">
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/drinks">
                  <p className="home-img-text">Energy Drink</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Energy Drink.jpg")}
                alt="bakki cookki Energy Drinks"
              />
            </div>
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/cookie#giftpack">
                  <p className="home-img-text">Gift Pack</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Range of Gift Packs.jpg")}
                alt="bakki cookki Gift Packs"
              />
            </div>
            <div className="img-cont">
              <div className="overcast">
                <Link to="/products/healthy">
                  <p className="home-img-text">Protein Cookies</p>
                </Link>
              </div>
              <img
                src={require("./images/picture/Protein cookies.jpg")}
                alt="Protein cookies"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
