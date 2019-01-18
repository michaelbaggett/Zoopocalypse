import React, { Component } from "react";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";

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
        <AnimalCard />
      </div>
    );
  }
}

export default Test;
