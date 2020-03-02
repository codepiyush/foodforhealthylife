import React from "react";

class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      imageno: 0
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
    this.props.desc.detail.map(details => {
      console.log(details);
      return (
        <div>
          <p className="disp-desc-sub">-{details}</p>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="disp-segment">
        <div className="disp-container">
          <div
            className="disp-img-sec"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <button
              className="next-button"
              onMouseOver={this.renderImage2}
              onMouseOut={this.renderImage1}
            >
              next
            </button>
            <img
              src={this.props.desc.images[this.state.imageno]}
              alt="pic"
              width="180px"
              height="250px"
            />
          </div>
          <div className="disp-desc">
            <div className="name-sec">
              <div>
                <p>{this.props.desc.name}</p>
              </div>
              <div className="info-icon">
                <i class="fas fa-info"></i>
                <div className="detail-box"></div>
              </div>
            </div>
            {this.props.desc.detail.map(details => {
              return (
                <div>
                  <p className="disp-desc-sub">-{details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Display1;
