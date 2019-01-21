import React, { Component } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";

import API from "../utils/API";

class Play extends Component {

    loadAnimals = () => {
        API.getAnimals()
          .then(res =>
            this.setState({ animals: res.data, animal_name: "", image: "" })
          )
          .catch(err => console.log(err));
      };

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
            <AnimalCard />
        </div>
          
            {/* Footer */}
            <Footer />
        </div>

     </div>
    )
  }
}


export default Play;