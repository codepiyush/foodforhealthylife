import React from "react";
import Sidebar from "./sidebar";
import Landing from "./Landing";
import Main from "./Main";
import Footer from "./Footer";
import Toolbar from "/home/atul/foodforhealthylife/src/components/Toolbar/Toolbar.js";
import SideDrawer from "/home/atul/foodforhealthylife/src/components/SideDrawer/SideDrawer";
import Backdrop from "/home/atul/foodforhealthylife/src/components/Backdrop/Backdrop.js";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let sideDrawer;
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Router>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <Sidebar />
          <div className="scroll-cont">
            <div className="scroll-child">
              <Landing />
            </div>
            <div className="scroll-child">
              <Main />
              <Footer />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
