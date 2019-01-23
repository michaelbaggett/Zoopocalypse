import React, { Component } from "react";
import "./index.css";

class StatusCard extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    completed: this.props.completed
  };

  render() {
    return (
      <div>
        {this.state.completed ? (
          <div className="card">
            <div className="animalstatus">
              <div className="img-container" style={cardStyle}>
                <img
                  className="image"
                  style={imageStyle}
                  alt={this.props.name}
                  src={this.props.image}
                />
              </div>
              <div>Status: Freed</div>
            </div>
          </div>
        ) : (
          <div className="card">
            <div className="animalstatus">
              <div className="img-container" style={cardStyle}>
                <img
                  style={imageStyle}
                  className="image"
                  alt={this.props.name}
                  src={this.props.image}
                />
              </div>
              <div>Status: Caged</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

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

export default StatusCard;
