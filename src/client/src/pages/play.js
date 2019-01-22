import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";

class Play extends Component {
  // make an api request for which animal is being played

  state = {
    name: ""
  };
  componentWillMount() {
    //api call deciding which animal
    this.setState({ name: "bat" });
  }
  render() {
    return (
      <div className="Site">
        <div className="Site-content">
          {/* Header */}
          <div className="App-header">
            <Header />
          </div>

          {/* Main Game Card contents goes below: */}
          <div className="main">
            <AnimalCard animal={this.state.name} />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Play;
