import React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <div id="slider">
          <div class="slides">
            <div class="slider">
              <div class="image">
                {" "}
                <img
                  src={require("./images/picture/Bakery Products.png")}
                  alt="bakery products"
                />{" "}
              </div>
            </div>
            <div class="slider">
              <div class="image">
                {" "}
                <img
                  src={require("./images/picture/Natural Product Profile.png")}
                  alt="Natural products"
                />{" "}
              </div>
            </div>
            <div class="slider">
              <div class="image">
                {" "}
                <img
                  src={require("./images/picture/Bakery Products.png")}
                  alt="Bakery products"
                />{" "}
              </div>
            </div>
            <div class="slider">
              <div class="image">
                {" "}
                <img
                  src={require("./images/picture/Natural Product Profile.png")}
                  alt="Natural product"
                />{" "}
              </div>
            </div>
          </div>
          <div class="switch">
            <ul>
              <li>
                <div class="on"></div>
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
