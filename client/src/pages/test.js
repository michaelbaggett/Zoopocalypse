import React, { Component } from "react";
import Header from "../components/Header";
import AnimalImage from "../images/1920b077029194de4d8b40d585e4ddf6.png";

const imageStyle = {
  width: "175px",
  background: "#50D737"
};
const cardStyle = {
  background: "white",
  width: "175px",
  border: "solid 5px purple",
  borderRadius: "10px",
  textAlign: "center",
  marginLeft: "20px"
};
class Test extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* Main Game Card contents goes below: */}
        <div className="main">
          <div className="card">
            <div style={cardStyle}>
              <img src={AnimalImage} alt="Logo" style={imageStyle} />
              <p>Demo Card</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
