import React from "react";
import Sidebar from "./sidebar";
import Landing from "./Landing";
import Main from "./Main";
import Footer from "./Footer";
import Toolbar from "./components/Toolbar/Toolbar.js";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop.js";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
    sidecontentView: ""
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  handleProductToggle = () => {
    this.setState((prevState) => {
      if (prevState.sidecontentView == "") {
        return ({ sidecontentView: "sidecontentshow" })
      }
      else {
        return ({ sidecontentView: "" })
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false, sidecontentView:"" });
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
          <SideDrawer show={this.state.sideDrawerOpen} sidecontentView={this.state.sidecontentView} handleProductToggle={this.handleProductToggle} />
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
