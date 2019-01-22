import React, { Component } from "react";
import StatusCard from "../StatusCard";
import animals from "../../zooAnimals.json";

  class PlayerProgress extends Component {
    render() {
        return (
            <div>
            {animals.map(animal => (
                <StatusCard
                image={animal.image}
                completed={animal.completed}
                />
              ))}
            </div>
        );
    }
}
  
  export default PlayerProgress;