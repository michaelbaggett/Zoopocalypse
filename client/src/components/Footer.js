import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div>
          <footer style={footerStyle}>© copyright 2018</footer>
      </div>
    )
  }
}

const footerStyle={
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
}
export default Footer;
