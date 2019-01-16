import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Some cool stuff</h1>
        <p style={pStyle} >and App.css is linked properly.</p>
      </div>
    )
  }
}
const pStyle = {
    textAlign: "center",
}
export default Header;
