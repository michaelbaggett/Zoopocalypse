import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalImage from "../images/1920b077029194de4d8b40d585e4ddf6.png";

class LogIn extends Component {
  render() {
    return (
     <div className="Site">
      <div className="Site-content">

        {/* Header */}
        <div classname="App-header">
          <Header />
        </div>

        {/* Main Game Card contents goes below: */}
        <div className="main">
          <div className="card">
            <div style={cardStyle}>
              <img src={AnimalImage} alt="Logo" style={imageStyle} />
              <p>Demo Card</p>
            </div>
          </div>
        </div>
          
        {/* Footer */}
        <Footer />
        </div>

     </div>
    )
  }
}
const imageStyle={
  width: "175px",
  background: "#50D737",
}
const cardStyle = {
  background: "white",
  width: "175px",
  border: "solid 5px purple",
  borderRadius: "10px",
  textAlign: "center",
  marginLeft: "20px",
}

export default LogIn;