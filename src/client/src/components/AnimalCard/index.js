import React, { Component } from "react";
import animal from "../../images/elephant.png";
import bar from "../../images/cageBars.png";

export class AnimalCard extends Component {
  render() {
    return (
      <div className="card" style={playerCardStyle }>
        <div>
          <img src={animal} alt="Animal" style={imgStyle} />
          <img src={bar} style={ barStyle} />
        </div>
      </div>
    );
  }
}

const imgStyle = {
 // width: "175px",
  height: "175px",
  background: "#50D737",
  border: "4px solid #444",
  borderRadius: "15px",
};
const barStyle = {
  height: "175px",
  zIndex: "10",
}
const cardStyle = {
  background: "white",
  width: "175px",
  border: "solid 5px purple",
  borderRadius: "10px",
  textAlign: "center",
  marginLeft: "20px"
};
const playerCardStyle = {
  textAlign: "center",
  border: "4px solid #7B5D94",
  margin: "auto",
  marginTop: "25px",
  width: "300px",
  backgroundColor: "#156369", 
  borderRadius: "25px",
}

export default AnimalCard;
