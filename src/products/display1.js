import React from "react";
import DetailBox from "./Datail-box";

class Display1 extends React.Component {
  constructor() {
    super();
    this.state = {
      imageno: 0,
    };
    this.renderDetails = this.renderDetails.bind(this);
    this.renderImage1 = this.renderImage1.bind(this);
    this.renderImage2 = this.renderImage2.bind(this);
  }

  renderImage1() {
    this.setState({ imageno: 0 });
  }
  renderImage2() {
    this.setState({ imageno: 1 });
  }
  renderDetails = () => {
    this.props.desc.detail.map((details) => {
      // console.log(details);
      return (
        <div>
          <p className="disp-desc-sub">-{details}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="disp-segment1">
        <div
          className="disp-container1"
          style={{
            width: !this.props.desc.OuterWidth
              ? "290px"
              : this.props.desc.OuterWidth,
          }}
        >
          <div
            className="disp-img-sec1"
            style={{ padding: "1px", textAlign: "center" }}
          >
            {this.props.desc.images.length == 2 ? (
              <button
                className="next-button"
                onMouseOver={this.renderImage2}
                onMouseOut={this.renderImage1}
              >
                <i class="fas fa-angle-right"></i>
              </button>
            ) : (
              ""
            )}

            <img
              src={this.props.desc.images[this.state.imageno]}
              alt="Bakkii cookii"
              width={!this.props.desc.width ? "180px" : this.props.desc.width}
              height={
                !this.props.desc.height ? "250px" : this.props.desc.height
              }
            />
          </div>
          <div className="disp-desc1">
            <div className="name-sec1">
              <div>
                <p className="BuyName">{this.props.desc.name}</p>
              </div>
              
            </div>
            <a href={this.props.desc.link}>
            <p className="home-img-text">{this.props.desc.buttontext}</p>
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Display1;
