import React from 'react';
import Display1 from './products/display1.js';

class BuyNow extends React.Component{
    constructor() {
        super();
        this.state = {
          cookies: [
            {
              images: [
                require("/home/atul/foodforhealthylife/src/images/flipkart.png"),
              ],
              name: "flipkart",
              link:"https://www.flipkart.com/search?q=bakkii+cookii&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&p%5B%5D=facets.brand%255B%255D%3DBAKKII%2BCOOKII",
              buttontext: "Buy Now",
              detail: [],
              width: "220px",
            },
            {
              images: [
                require("/home/atul/foodforhealthylife/src/images/gramfactory.png"),
              ],
              name: "GramFactory",
              link:"https://play.google.com/store/apps/details?id=com.gram.factory.retailerapplication",
              buttontext: "Download App",
              detail: [],
              width: "220px",
            },
            {
              images: [
                require("/home/atul/foodforhealthylife/src/images/bigbasket1.png"),
              ],
              name: "Big Basket",
              link:"https://www.bigbasket.com/pb/bakkii-cookii/",
              buttontext: "Buy Now",
              detail: [],
              width: "220px",
            },
          ],
        };
      }
      render() {
        return (
          <div>
          <div className="premium-cookie1" id="premium-cookie">
        <div></div>
        <div className="title-center1">
          <div className="premium-title">
            <span>
              <i className="fas fa-crown"></i> &nbsp; Buy Online
            </span>
          </div>
          </div>
          </div>
          <div className="cookie-container">
            <div className="normal-cookie">
              <div className="display-main">
                {this.state.cookies.map((cookie) => {
                  return <Display1 desc={{ ...cookie }} />;
                })}
              </div>
            </div>
          </div>
          <div className="presence-home presence-cont">
                    <p>For Large Orders</p>
                    <p>Contact Us Directly</p>
                    <p>Scroll down or click on "Contact Us" on sidebar</p>
          </div>
          </div>
        );
      }
}

export default BuyNow;