import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="brand">
            <div className="brand-head">
              <p>Associated Brands</p>
            </div>
            <div className="brand-logo">
              <img
                src={require("./images/Hello Cookies logo.png")}
                alt=""
                height="80px"
                width="240px"
              />
              <img
                src={require("./images/Kings.png")}
                alt=""
                height="100px"
                width="260px"
              />
              <img
                src={require("./images/FortiRich.jpg")}
                alt=""
                height="80px"
                width="240px"
              />
            </div>
          </div>
          <div className="contact" id="contact">
            <div className="contact-head">
              <p>Contacts</p>
            </div>
            <div className="contact-body">
              <div>
                {" "}
                <a href="mailto:kingdomoffice2019@gmail.com">
                  <i class="fas fa-envelope"></i> kingdomoffice2019@gmail.com
                </a>{" "}
              </div>
              <div>
                {" "}
                <a href="mailto:oprana@gmai.com">
                  <i class="fas fa-envelope"></i> oprana@gmai.com
                </a>{" "}
              </div>
              <div>
                <i class="fas fa-mobile"></i> 8130758722
              </div>
              <div>
                <a href="http://theemaster.com">
                  <i class="fab fa-blogger-b"></i> THEe MASTER
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/bakkii_cookii/">
                  <i class="fab fa-instagram"></i> @bakkii_cookii
                </a>
              </div>
            </div>
          </div>
          <div className="copyright">
            Copyright © 2020 — Food For Healthy Life
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
