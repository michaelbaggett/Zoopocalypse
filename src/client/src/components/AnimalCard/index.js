import React, { Component } from "react";
import AnimalImage from "../../images/elephant.png";
import zooAnimals from "../../zooAnimals.json";
import TestAnimalCard from "../animals";

export class AnimalCard extends Component {
  state = {
    zooAnimals
  };

  render() {
    return (
      <div className="card">
        <h1>This is the page where the game is played.</h1>
        <p>Route: "/play"</p>
        <div style={cardStyle}>
          <img src={AnimalImage} alt="Logo" style={imageStyle} />
          <p>Demo Animal Card</p>
        </div>
      </div>
    );
  }
}

// <div>
//   {this.state.zooAnimals.map(animal => (
//     <AnimalCard
//       id={animal.id}
//       key={animal.id}
//       name={animal.animal_name}
//       image={animal.image}
//       blanks={animal.blanks}
//     />
//   ))}
// </div>;

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

export default AnimalCard;
