import React from "react";
import Display from "./products/display";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        require("./images/picture/Range of Gift Packs.jpg"),
        require("./images/picture/Premium Range.jpg"),
        require("./images/picture/Fortified Range.jpg"),
        require("./images/picture/IMG_20190527_154530.jpg"),
        require("./images/picture/IMG_20190527_154547.jpg"),
        require("./images/picture/IMG_20190527_154623.jpg"),
        require("./images/picture/IMG_20190527_154713.jpg"),
        require("./images/picture/IMG_20190527_154751.jpg")
      ]
    };
  }
  render() {
    return (
      <div className="Home-page">
        <div className="display-main">
          wat
          {this.state.images.map(main => {
            return <div>home</div>;
          })}
        </div>
      </div>
    );
  }
}
export default Home;
