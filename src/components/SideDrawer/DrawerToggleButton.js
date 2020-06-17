import React from "react";

class drawerToggleButton extends React.Component {
  render() {
    return (
      <div>
        <button className="toggle_button" onClick={this.props.click}>
          <div className="toggle_button_line"></div>
          <div className="toggle_button_line"></div>
          <div className="toggle_button_line"></div>
        </button>
      </div>
    );
  }
}
export default drawerToggleButton;
