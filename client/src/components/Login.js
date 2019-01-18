import React, { Component } from 'react'
import AnimalImage from "../images/bat.png";
export class Login extends Component {
  render() {
    return (
        <div className="card">
        {/* Temp text notes for dev */}
            <h1> This is the Home Page/Login page </h1>
            <p>Route: "/"</p>
         {/* Main Card */}
            <div style={cardStyle}>
                <img src={AnimalImage} alt="Logo" style={imageStyle} />
                <p>Demo Card</p>
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

export default Login
