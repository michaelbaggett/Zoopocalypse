import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

class LogIn extends Component {
  render() {
    return (
     <div className="Site">
      <div className="Site-content">

        {/* Header */}
        <div classname="App-header">
          <Header />
        </div>

        {/* Main Game Card content goes below: */}
        <div className="main">
        
        </div>
          
        {/* Footer */}
        <Footer />
        </div>

     </div>
    )
  }
}

export default LogIn;