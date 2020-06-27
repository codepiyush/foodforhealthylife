import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <header className="toolbar">
          <nav className="toolbar_nav">
            <div className="toolbar_toggle_button">
              <DrawerToggleButton click={this.props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
              <a href="/">
                <img
                  src={require("../../images/BakkiicookiiLogo.png")}
                  alt="Bakkii cookii"
                />
              </a>
            </div>
            <div className="spacer"></div>
            <div className="back_button"></div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Toolbar;
