import React from "react";

class backdrop extends React.Component {
  render() {
    return (
      <div className="backdrop" onClick={this.props.click}>
        <div className="backButton">
          <button>BACK</button>
        </div>
      </div>
    );
  }
}
export default backdrop;
