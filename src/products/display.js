import React from "react";

class Display extends React.Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
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
          <div style={{ padding: "10px", textAlign: "center" }}>
            <img
              src={this.props.desc.imageUrl}
              alt="pic"
              widht="150px"
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

export default Display;
