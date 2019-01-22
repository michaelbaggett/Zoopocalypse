import React, { Component } from 'react';
import logo from '../public/images/header/zooapocolyps_logo.png';

export class Header extends Component {
  render() {
    return (
      <div className="wrapper" style={logoStyle}>
        <img src={logo} alt="Logo" style={imgStyle} />
      </div>
    )
  }
}

const logoStyle = {
   textAlign: "center",
}

const imgStyle = {
  width: "300px",
}

export default Header;
