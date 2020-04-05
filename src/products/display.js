import React from "react";
import DetailBox from './Datail-box';

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
        <div className="disp-container" style={{width: !this.props.desc.OuterWidth? "290px": this.props.desc.OuterWidth}}>
          <div
            className="disp-img-sec"
            style={{ padding: "10px", textAlign: "center" }}
          >
            <button
              className="next-button"
              onMouseOver={this.renderImage2}
              onMouseOut={this.renderImage1}
            >
            <i class="fas fa-angle-right"></i>
            </button>
            <img
              src={this.props.desc.images[this.state.imageno]}
              alt="pic"
              width={!this.props.desc.width? "180px": this.props.desc.width}
              height={!this.props.desc.height? "250px": this.props.desc.height}
            />
          </div>
          <div className="disp-desc">
            <div className="name-sec">
              <div>
                <p>{this.props.desc.name}</p>
              </div>
              <div className="info-icon">
                <i class="fas fa-info"></i>
                <div className="detail-box">
                  <DetailBox detail={this.props.desc.detailBox}/>
                </div>
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
